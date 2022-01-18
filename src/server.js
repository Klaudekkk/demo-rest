import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const instance = express();

export const startServer = (port, routes) => {
  instance.use(helmet());
  instance.use(cors({})); //TODO
  instance.use(bodyParser.json());
  instance.disable("x-powered-by");

  routes.forEach(
    ({ method, path, cbs }) =>
      method && instance[method.toLowerCase()](path, cbs)
  );

  instance.listen(port, () => {
    console.log(`Server UP on port ${port}`);
  });
};
