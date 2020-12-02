import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
let header;

const login = async (username, password) => {
	const response = await axios.post(API_URL + "/user/login", {
		username,
		password
	});

	header = {
		'Authorization': 'Bearer ' + response.data
	}

	const jwt = Buffer.from(response.data.split(".")[1], "base64").toString("utf-8");

	return JSON.parse(jwt);
}

const getEstablishment = async (establishmentId) => {
	const response = await axios.get(`${API_URL}/establishment/${establishmentId}`, {
		headers: header
	});
	return response;
}

const getAllEstablishments = async () => {
	const response = await axios.get(API_URL + "/establishment/", {
		headers: header
	})
	console.log("http listes restau");
	console.log(response);
	return response;
}

const addEstablishment = async (establishment) => {
	const response = await axios.post(`${API_URL}/establishment`, {
		name : establishment.name,
		phoneNumber : establishment.phoneNumber,
		VATNumber : establishment.VATNumber,
		email : establishment.email,
		category : establishment.category,
		street : establishment.street,
		number : establishment.number,
		country : establishment.country,
		city : establishment.city,
		postalCode : establishment.postalCode

	},{headers: header});
	return response.data;
}

const addTable = async (table, idEstablishement) => {
	return await axios.post(`${API_URL}/table`, {
		idEstablishment : idEstablishement,
		nbSeats : table.nbSeats,
		isOutside : table.isOutside
	},{headers: header});
}

const deleteEstablishment = async (idEstablishment) => {
	const response = await axios.delete(`${API_URL}/establishment`, {
		headers : header,
		data : {
			establishmentId : idEstablishment
		}
	});

	return response.data;
}

export { login, getEstablishment, getAllEstablishments, addEstablishment, addTable, deleteEstablishment }