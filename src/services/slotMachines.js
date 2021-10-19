import axios from "axios";

export async function initSlotMachine() {
	try {
		const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/slots/init`);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

export async function spin() {
	try {
		const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/slots/spin`);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
