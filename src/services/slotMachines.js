import axios from "axios";

export async function initSlotMachine() {
	try {
		const result = await axios.get(`http://localhost:3000/api/slots/init`);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

export async function spin() {
	try {
		const result = await axios.get(`http://localhost:3000/api/slots/spin`);
		return result.data;
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
