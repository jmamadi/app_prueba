export const products = [
    { id: 1, name: 'Cafe Colombiano', stock: 15, price: 2000, img: './images/bandera_1.png', descripcion: 'Se caracteriza por tener mucho cuerpo, notas de dulce, nuez y chocolate, hasta florales y frutales, casi tropical', region: 'Antioquía', category: 'Cafe'},
    { id: 2, name: 'Cafe Brasilero', stock: 20, price: 2500, img: './images/bandera_2.png', descripcion: 'Excelente café, de aroma suave, cuerpo ligero y sabor dulce', category: 'Cafe'},
    { id: 3, name: 'Cafe Costaricence', stock: 15, price: 2700, img: './images/bandera_3.png', descripcion: 'De las variedades Caturra , que produce un grano de mayor calidad y con mejores características aromáticas', category: 'Cafe'},
    { id: 4, name: 'Cafe Indú', stock: 8, price: 3000, img: './images/bandera_4.png', descripcion: 'Su taza es intensamente aromática, de sabor suave y con notas de chocolate', category: 'Cafe'},
    { id: 5, name: 'Taza Personalizada', stock: 12, price: 2800, img: './images/tazapersonalizada_1.png', descripcion: 'Producto de porcelana, con una película templada totalmente personalizable', category: 'Tazas'},
    { id: 6, name: 'Desayuno Premium', stock: 13, price: 3000, img: './images/desayuno.png', descripcion: 'En ese día tan especial, regalale la mejor sorpresa a es ser que tanto queres', category: 'Desayunos'},
];

/*
export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 500);
});

export const traerProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products[0]);
    }, 2000);
});
*/

export const traerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const traerProducto = (id) => {
    console.log(id)
    return new Promise((resolve) => {
       // const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
           // resolve(prod)
           resolve(products[0])
        }, 2000)
    })
}
