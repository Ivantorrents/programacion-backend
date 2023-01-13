class ProductManager{
    constructor(){
        this.products = []
    }
    getProducts = () => this.products
    getProductById = (id) => {
        const productDb = this.products.find(product => product.id == id)
        if (!productDb){
            return `no existe el producto con id: ${id}`
        }
        return productDb
    }

    addProduct = (newItem) => {
        const productDb = this.products.find(product => product.code == newItem.code)

        if (productDb) {
            return `se encuentra el producto`
        }

        if (this.products.length == 0) {
            newItem.id = 1
            this.products.push(newItem)
        } else {
            this.products = [...this.products, {...newItem, id: this.products[this.products.length -1].id + 1}]
        }
    }
}

const productos = new ProductManager(
    console.log(productos.addProduct({
        title: 'bad bunny',
        description: 'bad bunny en estadio jose amalfitani',
        price: 10000,
        thumbnail: '',
        code: 1,
        stock: 50
    })),

    console.log(productos.addProduct({
        title: 'Feid',
        description: 'Feid en Movistar Arena',
        price: 8000,
        thumbnail: '',
        code: 1,
        stock: 50
    })),

    console.log(productos.getProducts()),
    console.log(productos.getProductById(3)),
)