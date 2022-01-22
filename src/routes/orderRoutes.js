import database from "../database.js";

export const postOrder = (req, res) => {
    const {body} = req;
    const {order} = body;
    const createdOrder = database.addOrder(order);
    res.json(createdOrder);
    res.status(201);
    res.send();
}

export const getOrder = (req, res) => {
    const order = database.getOrder(req.query.orderId);
    res.json(order);
    res.status(201);
    res.send();
}