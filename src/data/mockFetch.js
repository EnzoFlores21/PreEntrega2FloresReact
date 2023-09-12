const products = [ // simulamos una respuesta de una API
    {id: 1, name: 'Producto 1', category: 'proteina',  price:  15.922, stock: 10, description: 'Proteína Bio Prot 1 kg de Hoch Sport', imageUrl: 'https://www.demusculos.com/shop/362-home_default/proteina-bio-prot-1-kg-hoch-sport.jpg'},
    {id: 2, name: 'Producto 2', category: 'proteina' , price:  16.329, stock: 6, description: 'Proteína XT Gold HTN de 1 kg', imageUrl: 'https://www.demusculos.com/shop/586-medium_default/proteina-xt-gold-htn-de-1-kg.jpghttps://www.demusculos.com/shop/586-medium_default/proteina-xt-gold-htn-de-1-kg.jpg'},
    {id: 3, name: 'Producto 3', category: 'creatina', price: 17.343, stock: 15, description: 'Creatina 300 grs de XXL Pro Nutrition', imageUrl: 'https://www.demusculos.com/shop/59-medium_default/creatina-300-grs-xxl.jpg'},
    {id: 4, name: 'Producto 4', category: 'creatina', price: 23.581, stock: 4, description: 'Creatina Drive 300 grs Nutrex', imageUrl: 'https://www.demusculos.com/shop/520-medium_default/creatina-drive-300-grs-nutrex.jpg'},
    {id: 5, name: 'Producto 5', category: 'creatina', price: 24.225, stock: 15, description: 'Creatina 300 grs Star Nutrition 100% micronizada y de monohidrato', imageUrl: 'https://www.demusculos.com/shop/576-medium_default/creatina-300-grs-star-nutrition.jpg'},
    {id: 6, name: 'Producto 6', category: 'accesorios', price: 5.475, stock: 3, description: 'Vaso Shakers Bpa Free no tóxico con Logo Shark', imageUrl: 'https://www.demusculos.com/shop/176-medium_default/shaker-vaso-shark.jpg'},
    {id: 7, name: 'Producto 7', category: 'accesorios', price: 5.475, stock: 5, description: 'Vaso Shakers Bpa Free no tóxico con Logo Determined', imageUrl: 'https://www.demusculos.com/shop/180-medium_default/shaker-vaso-determined.jpg'},
    {id: 8, name: 'Producto 8', category: 'accesorios', price:  5.475, stock: 16, description: 'Vaso Shakers Bpa Free no tóxico con Logo Black Panter', imageUrl: 'https://www.demusculos.com/shop/168-medium_default/shaker-vaso-black-panter.jpg'}
]

export const mFetch = (pid) => new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(pid ? products.find(product => product.id === pid): products)
        },2000)
})

