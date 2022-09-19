import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers, deployments } from "hardhat";

import { PopCat } from "../typechain";

use(chaiAsPromised);

describe("PopCat Tests - updateIPFS", () => {
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
		await expect(await PopCatContract.ipfsUri()).to.eq(
			"ipfs://QmddueuaHKWnyZSTaVReXqXHhUtg6gDEeKZQtG4Ekn9EMd"
		);
	});

	it("should update ipfs uri", async () => {
		await PopCat_Deployer.updateIPFS("fakelink");

		await expect(await PopCatContract.ipfsUri()).to.eq("fakelink");
	});

	it("should revert if not owner", async () => {
		await expect(PopCat_Alice.updateIPFS("fakelink")).to.revertedWith(
			"Ownable: caller is not the owner"
		);
	});
});
