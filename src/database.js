import {v4 as uuidv4} from "uuid";

class Database {
    data = [];
    menu = [];
    order = [];


    constructor() {
        this.data.push({
            id: uuidv4(),
            description: "Example",
            createDate: new Date(),
            status: "open",
        });

    }

    getAll() {
        return this.data;
    }

    getModelMenu({name, products, uuid, category}) {
        const modelMenu = {
            id: uuid,
            name: name,
            createDate: new Date(),
            products: this.getModelProducts(products),
            category: category
        };
        return modelMenu;
    }

    createMenu({name, products,category, uuid = uuidv4()}) {
        const menu = this.getModelMenu({name, products, category,uuid});
        this.menu.push(menu);
        return menu;
    }

    addOrder(order) {
        const modelOrder = this.getModelOrder(order);
        this.order.push(modelOrder);
        return modelOrder;
    }

    getModelOrder({productsIds, tableNumber, menuId}) {
        const order ={
            id: uuidv4(),
            productsIds: productsIds,
            menuId: menuId,
            creationDate: new Date(),
            tableNumber: tableNumber
        }
        return order;
    }

    getOrderById(orderId) {
        for(const order of this.order) {
            if (orderId === order.id){
                return order
            }
        }
    }

    getOrder(orderId) {
        const {productsIds, menuId} = this.getOrderById(orderId)
        const products = [];
        productsIds.forEach(productId => {
            products.push(
                this.getProductFromMenu(menuId, productId)
            )
        })
        return products;
    }

    getProductFromMenu(menuId, productId) {
        const menu = this.getMenuById(menuId);
        for (const menuProduct of menu.products) {
            if (productId === menuProduct.id ){
                return menuProduct
            }
        }
    }

    getModelProducts(products) {
        const modelProducts = [];
        for (const product of products) {
            modelProducts.push(this.getModelProduct(product))
        }
        return modelProducts
    }

    getModelProduct({name, price, uuid = uuidv4()}) {
        const product = {
            id: uuid,
            name: name,
            createDate: new Date(),
            price: price
        };
        return product
    }

    create(product) {
        const item = {
            id: uuidv4(),
            product,
            price: 24.99,
        };
        this.menu.push(item);
        return item;
    }

    updateMenu(menu) {
        for (let i in this.menu) {
            if (this.menu[i].id === menu.id) {
                this.menu[i] = this.getModelMenu(menu);
            }
        }
    }

    getMenuById(menuId) {
        for(const menu of this.menu) {
            if (menu.id === menuId) {
                return menu;
            }
        }
    }

    getMenu() {
        return this.menu;
    }
}

const database = new Database();
export default database;

