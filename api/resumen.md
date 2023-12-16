Modelos de la Base de Datos:
En el archivo Dog.js, hemos definido el modelo para las razas de perros. Cada raza tiene propiedades como nombre, imagen, altura, peso y años de vida. Además, establecimos una relación muchos a muchos con el modelo Temperament, que representa los temperamentos de los perros.

En el archivo Temperament.js, definimos el modelo para los temperamentos, que simplemente tiene un nombre. También establecimos una relación muchos a muchos con el modelo Dog, lo que significa que un temperamento puede estar asociado con varias razas de perros y viceversa.

Rutas:
Hemos creado varias rutas para interactuar con la información de las razas de perros y los temperamentos.

Obtener Razas de Perros (GET /dogs):

Esta ruta devuelve un arreglo de objetos, cada uno representando una raza de perro. La información se obtiene tanto de la base de datos como de una API externa.
Obtener Detalle de una Raza (GET /dogs/:idRaza):

Permite obtener información detallada sobre una raza específica, incluyendo sus temperamentos asociados. Esto funciona tanto para perros en la base de datos como para aquellos de la API externa.
Buscar Razas de Perros por Nombre (GET /dogs/name?="..."):

Esta ruta permite buscar razas de perros por su nombre, sin importar si coinciden exactamente. Funciona tanto en la base de datos como en la API externa.
Crear Nueva Raza de Perro (POST /dogs):

Permite la creación de nuevas razas de perros. La información, incluyendo los temperamentos asociados, se recibe en el cuerpo de la solicitud y se almacena en la base de datos.
Obtener Todos los Temperamentos (GET /temperaments):

Esta ruta obtiene todos los temperamentos de una API externa, los almacena en la base de datos y los retorna para su uso en la aplicación.
Lógica:
Utilizamos la biblioteca axios para realizar solicitudes a una API externa llamada TheDogApi desde nuestras rutas.

Se manejan los posibles errores de manera adecuada para dar respuestas significativas en caso de problemas.

En resumen, hemos configurado un backend que maneja la información sobre las razas de perros y sus temperamentos. Puedes realizar operaciones como obtener información detallada, buscar, crear nuevas razas de perros y gestionar temperamento