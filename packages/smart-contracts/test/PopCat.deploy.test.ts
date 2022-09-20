import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import { constants } from "ethers";
import { ethers, deployments } from "hardhat";

import { PopCat } from "../typechain";

use(chaiAsPromised);

const { deploy } = deployments;

describe("PopCat Tests - deploy", () => {
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

	describe("Successful Deploy", () => {
		it("should initialize name as PopPopPopCat", async () => {
			await expect(await PopCatContract.name()).to.eq("PopPopPopCat");
		});
		it("should initialize symbol as PC", async () => {
			await expect(await PopCatContract.symbol()).to.eq("PC");
		});

		it("should initialize tokenCount as 0", async () => {
			await expect(await PopCatContract.tokenCount()).to.eq(0);
		});

		it("should initialize totalSupply as 64", async () => {
			await expect(await PopCatContract.totalSupply()).to.eq(64);
		});
	});

	describe("Deploy and transfer ownership to another address", () => {
		it("should transfer ownership when specified an address", async () => {
			await deploy("PopCat2", {
				from: deployer.address,
				log: false,
				contract: "PopCat",
				args: [alice.address, 64],
			});
			PopCatContract = await ethers.getContract("PopCat2");

			expect(await PopCatContract.owner()).to.eq(alice.address);
		});
	});

	describe("Fail Deploys", () => {
		it("should revert with zero address", async () => {
			await expect(
				deploy("PopCat", {
					from: deployer.address,
					log: false,
					contract: "PopCat",
					args: [constants.AddressZero, 125],
				})
			).to.revertedWithCustomError(PopCatContract, "ForbiddenZeroAddress");
		});

		it("should revert with 0 maxSupply", async () => {
			await expect(
				deploy("PopCat", {
					from: deployer.address,
					log: false,
					contract: "PopCat",
					args: [deployer.address, 0],
				})
			).to.revertedWithCustomError(PopCatContract, "InvalidTotalSupply");
		});
	});
});
