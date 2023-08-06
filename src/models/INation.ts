export interface INation {
	name: {
		common: string;
		official: string;
		nativeName: any;
	};
	fifa: string;
	population: number;
	region: string;
	flags: {
		svg?: string;
		alt?: string;
	};
	subregion: string;
	capital: string[];
	tld: string[];
	currencies: {};
	languages: {};

	borders: string[];
}
