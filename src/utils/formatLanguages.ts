export const formatLanguages = (language: any) => {
	const key = Object.keys(language)[0];
	return language[key];
};
