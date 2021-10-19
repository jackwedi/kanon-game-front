import axios from "axios";

export async function getCountry(text) {
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_API_ENDPOINT}/api/countries/unique/${text}`
		);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

export async function getCountries(text) {
	try {
		const result = await axios.get(
			`${process.env.REACT_APP_API_ENDPOINT}/api/countries/search/${text}`
		);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
