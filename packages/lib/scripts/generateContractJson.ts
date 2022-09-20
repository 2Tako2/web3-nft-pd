import { writeFileSync } from "fs";

const main = () => {
	const contractJson = {
		name: "Pop Pop Cat",
		description: "Pop cat designed to pop through the world",
		image: "ipfs://QmPf56HnaScowvYuzrMNVYEwptJ2DMjqorqLNa7RgJWase",
		seller_fee_basic_points: 1000,
		fee_recipient: "0xcf74fEDc5BE5E3988B97044FABCF08851D14D1C6",
	};

	writeFileSync("./contractJson.json", JSON.stringify(contractJson));
};

main();
