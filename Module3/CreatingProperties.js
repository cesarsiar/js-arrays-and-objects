//Creamos  el prototipo de nuestro objeto, esto es por medio de las propiedades

const contentCoursePrototype = {
	title: 'no title',
	id: 'no id',
	description: 'no description',
};

const contentBlockOne = contentCoursePrototype;

contentBlockOne.title = 'Curso de programacion';
contentBlockOne.id = 'cu-pro-1';
contentBlockOne.description = 'Curso de programacion chido';

console.log(contentBlockOne);
