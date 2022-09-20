import { writeFileSync } from "fs";

const main = () => {
	const defaultMetadata = {
		image: "ipfs://QmPf56HnaScowvYuzrMNVYEwptJ2DMjqorqLNa7RgJWase",
		description: `Pop Cat metadata is not revealed yet`,
		name: `Pop Cat #hidden`,
		attributes: [
			{
				trait_type: "speed",
				value: 5,
				display_type: "boost_number",
			},
			{
				trait_type: "size",
				value: 5,
				display_type: "boost_percentage",
			},
			{
				trait_type: "jump power",
				value: 5,
				display_type: "number",
			},
		],
		background_color: "ffffff",
	};

	writeFileSync("./defaultMetadata.json", JSON.stringify(defaultMetadata));
};

main();
