import request from "../../../Service/";
const api = new request();

export const getJokesCategory = async category => {
	try {
		const { payload } = category;
		let response = await api.get(`jokes/random?category=${payload}`);
		return response;
	} catch (error) {
		if (error.response) {
			if (error.response.status === 404) return null;
			throw Error(error.response.data.message);
		}
		throw Error(error.message);
	}
};

export const getCategory = async () => {
	try {
		let response = await api.get(`jokes/categories`);
		return response;
	} catch (error) {
		if (error.response) {
			if (error.response.status === 404) return null;
			throw Error(error.response.data.message);
		}
		throw Error(error.message);
	}
};

export const getSearch = async search => {
	try {
		const response = await api.get(`jokes/search?query=${search}`);
		return response;
	} catch (error) {
		if (error.response) {
			if (error.response.status === 404) return null;
			throw Error(error.response.data.message);
		}
		throw Error(error.message);
	}
};
