const axios = require('axios');

const getClima = async(lat, lng) => {

	let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e3208b54b623a4edb8e722395f28f0bd`);

	return resp.data.main.temp;
}

module.exports = {
	getClima
}