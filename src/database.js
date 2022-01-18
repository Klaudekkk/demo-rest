import { v4 as uuidv4 } from "uuid";

class Database {
  data = [];

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
}

const database = new Database();
export default database;
