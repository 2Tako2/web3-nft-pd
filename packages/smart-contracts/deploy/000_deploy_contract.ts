import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { ethers, deployments } = hre;
	const { deploy } = deployments;

	const [deployer] = await ethers.getSigners();

	await deploy("PopCat", {
		from: deployer.address,
		log: true,
		contract: "PopCat",
		args: [deployer.address, 64],
	});
};
export default func;
func.tags = ["testbed", "_PopCat"];
