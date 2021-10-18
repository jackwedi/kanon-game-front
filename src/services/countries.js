import axios from "axios";

//  axios.defaults.withCredentials = true;
// axios.defaults.baseURL = publicRuntimeConfig.API_URL;

export async function getCountry(text) {
	try {
		const result = await axios.get(
			`http://localhost:3000/api/countries/unique/${text}`
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
			`http://localhost:3000/api/countries/search/${text}`
		);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
