import { v4 as uuidv4 } from "uuid";

class Database {
  data = [];
  menu = [];

  constructor() {
    this.data.push({
      id: uuidv4(),
      description: "Example",
      createDate: new Date(),
      status: "open",
    });

    this.menu.push({
      id: uuidv4(),
      name: "Example",
      price: 24.99,
    });
  }


  getAll() {
    return this.data;
  }

  getById(id) {
    return this.data.find((item) => item.id === id);
  }

  getByStatus(status) {
    return this.data.find((item) => item.status === status);
  }

  create(description) {
    const item = {
      id: uuidv4(),
      description,
      createDate: new Date(),
      status: "open",
    };


    this.data.push(item);

    return item;
  }


  create(product) {
    const item = {
      id: uuidv4(),
      product,
      price: 24.99,
    };

    this.menu.push(item);

    return item;
    console.log(item);
  }

  AddtoMenu(id, name, price){
    this.menu.push({id, name, price});
  }

  getMenu(){
    return this.menu;
  }
}

const database = new Database();
export default database;
