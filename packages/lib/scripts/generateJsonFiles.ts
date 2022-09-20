// run script with npx ts-node generateJsonFiles.ts

import shuffle from "lodash/fp/shuffle";
import {
	Level,
	PopCatAttribute,
	PopCatAttributeType,
	PopCatMetadata,
} from "../types";
import { writeFileSync } from "fs";

const main = () => {
	let attributeList: PopCatAttribute[][] = [];

	const maxLevel = 4;

	for (let i = 1; i < maxLevel + 1; i++) {
		for (let j = 1; j < maxLevel + 1; j++) {
			for (let k = 1; k < maxLevel + 1; k++) {
				attributeList.push([
					{
						trait_type: "speed",
						value: i as Level,
						display_type: "boost_number",
					},
					{
						trait_type: "size",
						value: j as Level,
						display_type: "boost_percentage",
					},
					{
						trait_type: "jump power",
						value: k as Level,
						display_type: "number",
					},
				]);
			}
		}
	}

	const metadataList: PopCatMetadata[] = shuffle(attributeList).map(
		(attribute, index) => ({
			image: "ipfs://QmPf56HnaScowvYuzrMNVYEwptJ2DMjqorqLNa7RgJWase",
			description: `This is Pop Cat number ${index}`,
			name: `Pop Cat #${index}`,
			attributes: attribute,
			background_color: Math.floor(Math.random() * 16777215).toString(16),
			// animation_url: "",
		})
	);

	metadataList.forEach((metadata, index) => {
		writeFileSync(
			`./PopCatMetadataList/${index + 1}.json`,
			JSON.stringify(metadata)
		);
	});
	console.log(`Generated ${metadataList.length} JSON files`);
};

main();
