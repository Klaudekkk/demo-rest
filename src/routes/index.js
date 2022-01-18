import database from "../database.js";

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
        const { body } = req;
        const { description } = body;
        const result = database.create(description);
        res.json(result);
      },
    ],
  },
];
