export const BASE_URL = 'https://restcountries.com/v3.1/';
export const GET_BY_NAME_URL = (name: string) =>
	`https://restcountries.com/v3.1/name/${name}`;
export const filterByCode = (codes: string[]) =>
	BASE_URL + `alpha?codes=` + codes.join(',');
