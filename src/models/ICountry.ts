export interface ICountry {
	name: {
		common: string;
	};
	population: number;
	region: string;
	capital: string[];
	fifa: string;
	flags: {
		png: string;
		svg: string;
	};
}
