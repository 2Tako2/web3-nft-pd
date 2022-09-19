import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { BigNumber, constants } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { deployments, ethers } from "hardhat";

import { PopCat } from "../typechain";

use(chaiAsPromised);

const { deploy } = deployments;

describe("PopCat Tests - mint", () => {
	let PopCatContract: PopCat;
	let deployer: SignerWithAddress;
	let alice: SignerWithAddress;
	let bob: SignerWithAddress;

	let PopCat_Alice: PopCat;
	let PopCat_Bob: PopCat;

	let tokenCount: BigNumber;

	beforeEach(async () => {
		await deployments.fixture("_PopCat");
		[deployer, alice, bob] = await ethers.getSigners();

		PopCatContract = await ethers.getContract("PopCat");
		PopCat_Alice = PopCatContract.connect(alice);
		PopCat_Bob = PopCatContract.connect(bob);
	});

	describe("Successful Mint", () => {
		it("should increment currentTokenId by 1", async () => {
			const initial = await PopCatContract.tokenCount();
			await PopCat_Alice.mint(alice.address);
			const final = await PopCatContract.tokenCount();
			await expect(initial.add(1)).to.eq(final);
		});

		it("should increase token balance by one after mint", async () => {
			const tokenBalance = await PopCatContract.balanceOf(alice.address);
			await PopCat_Alice.mint(alice.address);

			await expect(await PopCatContract.balanceOf(alice.address)).to.eq(
				tokenBalance.add(1)
			);
		});

		it("should mint a token to the given address", async () => {
			await expect(await PopCatContract.balanceOf(bob.address)).to.equal(0);

			await PopCat_Alice.mint(bob.address);
			const tokenId = await PopCatContract.tokenCount();

			await expect(await PopCatContract.ownerOf(tokenId)).to.eq(bob.address);
		});

		it("should emit event after successful mint", async () => {
			const tx = await PopCat_Alice.mint(bob.address);
			tokenCount = await PopCatContract.tokenCount();
			await expect(tx)
				.to.emit(PopCatContract, "SuccessfulMint")
				.withArgs(tokenCount, bob.address);
		});
	});

	describe("Fail Mint", () => {
		it("should revert when maxSupply tokens have minted", async () => {
			await deploy("PopCat2", {
				from: deployer.address,
				log: false,
				contract: "PopCat",
				args: [deployer.address, 2],
			});
			PopCatContract = await ethers.getContract("PopCat2");
			PopCat_Alice = await PopCatContract.connect(alice);

			expect(await PopCatContract.tokenCount()).to.equal(0);

			await PopCat_Alice.mint(alice.address);
			expect(await PopCatContract.tokenCount()).to.equal(1);

			await PopCat_Alice.mint(alice.address);
			expect(await PopCatContract.tokenCount()).to.equal(2);

			await expect(PopCat_Alice.mint(alice.address)).to.revertedWithCustomError(
				PopCatContract,
				"ExceedingMaxSupply"
			);
		});

		it("should revert when sending to zeroAddress", async () => {
			await expect(
				PopCat_Alice.mint(constants.AddressZero)
			).to.revertedWithCustomError(PopCatContract, "ForbiddenZeroAddress");
		});
	});
});
