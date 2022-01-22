import database from "../database.js";

export const getMenu = (req, res) => {
    const result = database.getMenu();
    res.json(result);
}

export const postMenu = (req, res) => {
    const {body} = req;
    const {menu} = body;
    console.log(menu)
    if (menu.products.length < 2) {
        res.writeHead(400, "Za malo");
        res.status();
    } else {
        database.createMenu(menu);
        res.status(201);
    }
    res.send();
}


export const updateMenu = (req, res) => {
    const {body} = req;
    const {menu} = body;
    console.log("updateMenu ", menu)
    if (menu.products.length < 2) {
        res.writeHead(400, "Za malo");
        res.status();
    } else {
        database.updateMenu(menu);
        res.status(201);
    }
    res.send();
}