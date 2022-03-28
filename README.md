# Curso de Reacct JS - CoderHouse

## Desarrollado por: Juan Martín Amadi Dattero

✓ Contacto:  
    - Email: jjmamadi@gmail.com  
    - Linkedin: https://www.linkedin.com/in/jamadi/  
    - GitHub: https://github.com/jmamadi  

## Información del proyecto:

Proyecto orientado al ecommerce en la industria del café y productos complementarios a la misma. El proyecto fue desarrollado principalmente utilizando React Js. En esta app se podrán realizar selecciones de compras en un muestreo general como así también específico (sección café, desayunos y tazas). Una vez finalizada la pre selección de productos se podrá proceder a la compra habiendo completado previamente los campos obligatorios de contacto para generar una orden de compras para el seguimiento del usuario.

## Herramientas utilizadas para el desarrollo del producto:

✓ Create React App  
✓ Css  
✓ Firebase  
✓ Figma  
✓ Java Script  
✓ React Js  
✓ React-Router  
✓ Visual Studio Code  

## Detalle del desarrollo:

### Variables de entorno que deben configurarse:

✓ REACT_APP_ApiKey  
✓ REACT_APP_AuthDomain  
✓ REACT_APP_projectId  
✓ REACT_APP_StorageBucket  
✓ REACT_APP_MessagingSenderId  
✓ REACT_APP_AppId  

### Tablas de Firebase:
Las mismas son un total de tres elementos. Dos de ellas son generadas de manera manual por la empresa y una tercera de manera automática a medida en que los usuarios van generando ordenes de compra. Esta tercera se nutre no solo del formulario de contacto sino también por la tabla de productos que se encuentra linkeado por el stock de los mismos. A continuación se detallan las mismas:

#### 1. Products
✓ id vía generación automática de Firebase  
✓ category: Seccionado en tres (cafe, desayunos y tazas)  
✓ description: Orientado principalmente a describir las particularidades de cada café, pero también se le da un descriptivo del tipo de producto que lleva en los demás elementos  
✓ img: Aquí se detalla el origen del producto para los cafés a través de su nacionalidad y para el resto, un detalle del producto que se lleva  
✓ name: nombre del producto  
✓ price: precio del producto en moneda local (ARS $)  
✓ stock: cantidad disponible de la unidad visualizada  

#### 2. Categories
✓ id vía generación automática de Firebase  
✓ description: distingue la categoría a la cual pertenece la sección  

#### 3. Orders
✓ id vía generación automática a través de la compra realizada por el usuario, identificación que le será detallada al cliente para hacer seguimiento de su compra  
✓ buyer: Detalle característico que se solicita en compras online con toda la información necesaria para contactar al cliente para la posterior entrega del producto (domicilio, teléfono de contacto, email, comentarios y fecha de realización para organizar prioridades en las entregas)  
✓ items: detalle del producto seleccionado, stock y precio total de la compra  

### Rutas de la aplicación

Las rutas de la aplicación son las siguientes:

✓ / - Directorio raíz, el cual es utilizado tanto en el logo de la empresa como en la finalización de la compra  
✓ /category/:categoryId - Filtra por los productos que son de la categoría seleccionada  
✓ /detail/:productId - Filtra el producto a través de su id único  
✓ /cart/ - visualiza el carrito con los productos seleccionados (si no hay productos seleccionados, no estára la posibilidad de   acceder a dicha ruta)  

### Funcionamiento del sitio

![Proceso de compra](https://agiongrande.github.io/deautor-react/deautor/public/proceso.gif)