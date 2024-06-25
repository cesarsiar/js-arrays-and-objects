//Las 4 formas en que podemos manipular datos son:
/**
 * Crear
 * Leer
 * Actualizar
 * Eliminar
 */

const carPrototype = {
	brand: 'Nissan',
	model: 'Versa',
	year: '2021',
	type: 'sedan',
	color: 'white',
	passengersCapability: '5',
};
const carObject = carPrototype;

//Creating
carObject.combustible = 'Gasoline';
console.log(carObject);

//Reading properties
console.log(`El color del coche es: ${carObject.color}`);

//Update properties
carObject.combustible = 'Diesel';
console.log(`El combustible del coche es: ${carObject.combustible}`);

//Deleting properties
delete carObject.color;
console.log(carObject);
