
// const axios = require('axios');
// 
const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		descripcion: 'Direccion de la ciudad para optener el clima',
		demand:true
	}
}).argv;

let getInfo = async(direccion) => {
	try{
		let coors= await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(coors.lat, coors.lng);

		return `El clima en ${coors.direccion} es de ${ temp } grados`;

	}catch(e){
		return `No se pudo determinar el clima en ${direccion}`;
	}

}

getInfo(argv.direccion)
.then( resp => console.log(resp))
.catch(e => console.log(e));

