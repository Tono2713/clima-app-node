const axios = require('axios');

const getLugarLatLng = async(direccion) =>{

	// let encodedUrl = encodeURI(argv.direccion);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ direccion }&key=AIzaSyDCsoHsIF6MstrPh1Cw0LnxYA0EIBhWteg`)
		
	if( resp.data.status === 'ZERO_RESULTS'){
		throw new Error(`No hay resultados para la ciudad: ${direccion}`);
	}

	let location = resp.data.results[0];
	let coors = location.geometry.location;

	return {
		direccion: location.formatted_address,
		lat: coors.lat,
		lng: coors.lng
	}
}

module.exports = {
	getLugarLatLng
}