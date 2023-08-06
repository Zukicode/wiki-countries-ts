export const formatNativeName = (nativeName: any) => {
	const key = Object.keys(nativeName)[0];
	return nativeName[key].official;
};
