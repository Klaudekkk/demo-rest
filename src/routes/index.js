import database from "../database.js";
import {getOrder, postOrder} from "./orderRoutes.js";
import {getMenu, updateMenu, postMenu } from "./menuRoutes.js";


export default [
    {
        method: "GET",
        path: "/",
        cbs: [
            (req, res, next) => {
                console.log(`New request [${new Date()}] ${JSON.stringify(req.body)}`);
                next();
            },
            (req, res) => {
                res.json(database.getAll());
            },
        ],
    },
    {
        method: "POST",
        path: "/",
        cbs: [
            (req, res) => {
                const {body} = req;
                const {description} = body;
                const result = database.create(description);
                res.json(result);
            },
        ],
    },
    {
        method: "GET",
        path: "/menu",
        cbs: [
            (req, res, next) => {
                console.log(`New request [${new Date()}] ${JSON.stringify(req.body)}`);
                next();
            },
            getMenu,
        ],
    },
    {
        method: "POST",
        path: "/menu",
        cbs: [
            postMenu,
        ],
    },
    {
        method: "PUT",
        path: "/menu",
        cbs: [
            updateMenu,
        ],
    },
    {
        method: "GET",
        path: "/order",
        cbs: [
            getOrder,
        ],
    },
    {
        method: "POST",
        path: "/order",
        cbs: [
            postOrder,
        ],
    },


];
