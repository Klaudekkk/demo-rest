import routes from "./routes/index.js";
import { startServer } from "./server.js";

const run = async () => {
  try {
    startServer(3000, routes);
  } catch (err) {
    console.error("Oops: " + err.message);
    process.exit(1);
  }
};

run();
