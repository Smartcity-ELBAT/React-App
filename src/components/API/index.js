const api = require("./http");

const login = async (username, password) => {
	if (username !== "" && password !== "") {
		return await api.login(username, password);
	} else throw new Error("Identifiant(s) manquant(s)");
}

const getEstablishment = async (establishmentId) => {
	if(establishmentId !== undefined)
		return await api.getEstablishment(establishmentId);
	else throw new Error("L'identifiant de l'établissement est manquant !");
}

const getAllEstablishments = async () => {
	return await api.getAllEstablishments();

}

const postEstablishment = async (establishment) => {
	if(establishment !== undefined)
		return await api.addEstablishment(establishment);
	else throw new Error("L'établissement est manquant à la requête");
}

const postTable = async (table, idEstablishment) => {
	if(table !== undefined && idEstablishment !== undefined)
		return await api.addTable(table, idEstablishment);
	else throw new Error("La table et l'identifiant sont obligatoires !");
}

const deleteEstablishment = async (idEstablishment) => {
	if(idEstablishment !== undefined)
		return await api.deleteEstablishment(idEstablishment);
	else throw new Error("L'identifiant est obligatoire !");
}

export {
	login,
	getEstablishment,
	getAllEstablishments,
	postEstablishment,
	postTable,
	deleteEstablishment
}
