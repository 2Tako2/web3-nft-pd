import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers, deployments } from "hardhat";

import { PopCat } from "../typechain";

use(chaiAsPromised);

describe("PopCat Tests - tokenURI", () => {
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

	it("should return default tokenUriBase", async () => {
		await expect(await PopCat_Alice.tokenURI(1)).to.eq(
			"ipfs://QmRvxvHqY5vKgnBegGsYsci39QgpmkP2B52jGcbqxprX2q"
		);
	});

	it("should return default tokenUriBase", async () => {
		await PopCat_Deployer.updateTokenUriBase(
			"ipfs://QmVNmTcQLZoqC1rQbgh2zaENJvuYSaUDWbZXKQMExKyDKQ"
		);
		await expect(await PopCat_Alice.tokenURI(1)).to.eq(
			"ipfs://QmVNmTcQLZoqC1rQbgh2zaENJvuYSaUDWbZXKQMExKyDKQ/1"
		);
	});

	it("should revert provide invalid token id", async () => {
		await expect(PopCat_Alice.tokenURI(200)).to.revertedWithCustomError(
			PopCatContract,
			"TokenIdNotFound"
		);
	});
});
