# Curso de Reacct JS - CoderHouse

q## `Desarrollado por: Juan Martín Amadi Dattero`

✓ Contacto:
    - Email: jjmamadi@gmail.com;
    - Linkedin: https://www.linkedin.com/in/jamadi/;
    - GitHub: https://github.com/jmamadi;

## `Información del proyecto:`

Proyecto orientado al ecommerce en la industria del café y productos complementarios a la misma. El proyecto fue desarrollado principalmente utilizando React Js. En esta app se podrán realizar selecciones de compras en un muestreo general como así también específico (sección café, desayunos y tazas). Una vez finalizada la pre selección de productos se podrá proceder a la compra habiendo completado previamente los campos obligatorios de contacto para generar una orden de compras para el seguimiento del usuario.

## `Herramientas utilizadas para el desarrollo del producto:`

✓ Create React App
✓ Css
✓ Firebase
✓ Figma
✓ Java Script
✓ React Js
✓ React-Router
✓ Visual Studio Code

## `Detalle del desarrollo:### Variables de entorno:`

### `Variables de entorno que deben configurarse:`

- REACT_APP_ApiKey
- REACT_APP_AuthDomain
- REACT_APP_projectId
- REACT_APP_StorageBucket
- REACT_APP_MessagingSenderId
- REACT_APP_AppId

### Tablas de Firebase

Se deben crear dos tablas de Firebase. Una de ellas para las categorías y otras para los productos. Las tablas deben tener la siguiente estructura:

##### Colección: categorías
- ID
- Nombre: nombre del producto

##### Colección: productos
- ID (se recomienda de generación automática)
- Categoria: categoría del producto. Ejemplo: vodka, licor, etc.
- Contenido: tamaño de la botella, en ml. Por ejemplo: 750, 1000.
- Marca: marca de la bebida.
- Nombre: nombre del producto.
- Precio: precio del producto en pesos argentinos. Por ejemplo: 500, 1000.
- Stock: stock disponible
- img: imagen del producto, en la carpeta img, sin la extensión.

Adicionalmente, al finalizar la compra se crea la colección "ordenes". Esta tabla se crea de manera automática e incluye la información del comprador (nombre, teléfono, dirección, comentarios), los datos correspondientes a cada uno de los productos adquiridos, el precio total y la fecha.

### Rutas de la aplicación

Las rutas de la aplicación son las siguientes:

- / => directorio raíz
- /category/:categoryName => Filtra por los productos que son de categoría categoryName
- /detail/:productID => Filtra el producto cuyo ID es productID
- /carrito/ => visualiza el carrito

### Sitio en funcionamiento

A continuación se muestra el sitio en funcionamiento:

![Proceso de compra](https://agiongrande.github.io/deautor-react/deautor/public/proceso.gif)