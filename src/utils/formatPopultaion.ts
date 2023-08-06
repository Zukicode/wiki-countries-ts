export function formatPopulation(num: number): string {
	const numStr = num.toString();

	if (numStr.length <= 3) {
		return numStr;
	}

	let formattedStr = '';

	const remainder = numStr.length % 3;
	if (remainder !== 0) {
		formattedStr = numStr.slice(0, remainder) + ',';
	}

	for (let i = remainder; i < numStr.length; i += 3) {
		formattedStr += numStr.slice(i, i + 3) + ',';
	}

	return formattedStr.slice(0, -1);
}
