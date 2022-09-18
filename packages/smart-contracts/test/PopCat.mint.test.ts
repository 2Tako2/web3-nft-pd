import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { constants } from "ethers";
import { deployments, ethers } from "hardhat";

import { PopCat } from "../typechain";

use(chaiAsPromised);

describe("PopCat Tests - mint", () => {
	let PopCatContract: PopCat;
	let deployer: SignerWithAddress;
	let alice: SignerWithAddress;
	let bob: SignerWithAddress;

	let PopCat_Alice: PopCat;
	let PopCat_Bob: PopCat;

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
	});

	describe("Fail Mint", () => {
		// TODO: how to test this?
		// it("should revert when maxSupply tokens have minted", async () => {
		// 	await expect(0);
		// });

		it("should revert when sending to zeroAddress", async () => {
			await expect(
				PopCat_Alice.mint(constants.AddressZero)
			).to.revertedWithCustomError(PopCatContract, "ForbiddenZeroAddress");
		});
	});
});
