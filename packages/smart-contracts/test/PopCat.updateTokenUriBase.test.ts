import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers, deployments } from "hardhat";

import { PopCat } from "../typechain";

use(chaiAsPromised);

describe("PopCat Tests - updateTokenUri", () => {
	let PopCatContract: PopCat;
	let deployer: SignerWithAddress;
	let alice: SignerWithAddress;

	let PopCat_Deployer: PopCat;
	let PopCat_Alice: PopCat;

	beforeEach(async () => {
		await deployments.fixture("_PopCat");
		[deployer, alice] = await ethers.getSigners();

		PopCatContract = await ethers.getContract("PopCat");
		PopCat_Deployer = PopCatContract.connect(deployer);
		PopCat_Alice = PopCatContract.connect(alice);
	});

	it("should initialize with ipfs uri equals to given link", async () => {
		await expect(await PopCatContract.tokenUriBase()).to.eq(
			"ipfs://QmRvxvHqY5vKgnBegGsYsci39QgpmkP2B52jGcbqxprX2q"
		);
	});

	it("should initialize with false on revealed", async () => {
		await expect(await PopCatContract.revealed()).to.eq(false);
	});

	it("should update ipfs uri", async () => {
		await PopCat_Deployer.updateTokenUriBase("fakelink");

		await expect(await PopCatContract.tokenUriBase()).to.eq("fakelink");
	});

	it("should update revealed to true", async () => {
		await PopCat_Deployer.updateTokenUriBase("fakelink");

		await expect(await PopCatContract.revealed()).to.eq(true);
	});

	it("should revert if not owner", async () => {
		await expect(PopCat_Alice.updateTokenUriBase("fakelink")).to.revertedWith(
			"Ownable: caller is not the owner"
		);
	});
});
