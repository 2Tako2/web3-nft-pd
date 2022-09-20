export type Level = 1 | 2 | 3 | 4;

export type PopCatAttributeType = "size" | "speed" | "jump power";

export interface PopCatAttribute {
	trait_type: PopCatAttributeType;
	value: Level;
	display_type?: string;
}

export interface PopCatMetadata {
	image: string;
	description: string;
	name: string;
	attributes: PopCatAttribute[];
	background_color: string;
	// animation_url: string;
}

export type IndexedPopCatMetadata = Record<string, PopCatMetadata>;
