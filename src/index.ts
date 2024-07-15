import { AppDataSource } from "./db/data-source";
import express from "express";
import "dotenv/config";
import errorHandler from "./middlewares/errorHandler";
import notFoundHandler from "./middlewares/notFoundHandler";
import healthCheckMiddleware from "./middlewares/healthCheckMiddleware";
import routes from "./routes/router";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/health', healthCheckMiddleware)
app.use(routes);
app.use(errorHandler);
app.use(notFoundHandler);

AppDataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT || PORT, async () => {
      console.log(`Server is running on port ${process.env.PORT || PORT}`);
    });
  })
  .catch((error) =>
    console.log("Error during Data Source initialization:", error)
  );

export default app;
