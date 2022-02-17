export const products = [
    {
        id: 1,
        name: 'Cafe Colombiano',
        stock: 15,
        price: 2000,
        //img: './img/camisa.jpg',
        img: './images/bandera_1.png',
        category: 'Cafe',
    },
    {
        id: 2,
        name: 'Cafe Brasilero',
        stock: 20,
        price: 2500,
        img: './images/bandera_2.png',
        category: 'Cafe',
    },
    {
        id: 3,
        name: 'Cafe Costaricence',
        stock: 15,
        price: 2700,
        img: './images/bandera_3.png',
        category: 'Cafe',
    },
    {
        id: 4,
        name: 'Cafe Indú',
        stock: 8,
        price: 3000,
        //img: './img/rinonera.jpg',
        img: './images/bandera_4.png',
        category: 'Cafe',
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
