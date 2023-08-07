# Lista de Libros App

Esta es una pequeña aplicación web de lista de libros desarrollada utilizando React con el framework Next.js. El propósito principal de esta aplicación es practicar el manejo de interacciones con el usuario, la gestión del estado, el filtrado de datos y la estructuración del código.

## Funcionalidad

La aplicación cuenta con las siguientes características:

### Visualización de Libros Disponibles

La página principal muestra una lista de libros disponibles que los usuarios pueden revisar. Cada libro está representado con su título, autor y género.

### Creación de Lista de Lectura

Los usuarios tienen la capacidad de crear una lista de lectura personalizada a partir de los libros disponibles. La interfaz de usuario distingue claramente entre los libros que están en la lista de lectura y los que no lo están. Además, es posible mover un libro de la lista de lectura a la lista de disponibles y viceversa.

### Filtrado de Libros por Género

Se ofrece a los usuarios la opción de filtrar la lista de libros disponibles por género. Junto con el filtro, se muestra un contador que indica el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

### Sincronización de Estado

La aplicación mantiene un estado global que refleja el número de libros en la lista de lectura y el número de libros aún disponibles. Cuando un libro se traslada de la lista de disponibles a la lista de lectura, los recuentos se actualizan automáticamente.

### Persistencia de Datos

Los datos de la lista de lectura se almacenan en el almacenamiento local del navegador, lo que permite que la lista de lectura se mantenga incluso después de recargar la página. Esta característica garantiza una experiencia de usuario fluida.

### Sincronización entre Pestañas

Si un usuario abre la aplicación en dos pestañas diferentes del navegador, los cambios realizados en una pestaña se reflejarán instantáneamente en la otra. Esto se logra sin la necesidad de un backend, lo que facilita la sincronización de datos entre distintas instancias de la aplicación.

## Configuración y Ejecución

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del repositorio.
3. Ejecuta `npm install` para instalar las dependencias.
4. Luego, ejecuta `npm run dev` para iniciar el servidor de desarrollo.
5. Abre tu navegador y ve a `http://localhost:3000` para acceder a la aplicación.



---

Esta aplicación fue creada como parte de un ejercicio de práctica para aprender y mejorar las habilidades de desarrollo utilizando React y Next.js. 

