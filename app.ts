import { sequelize } from "./src/config/sequelize";
import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./src/routes/routes";
import { json, urlencoded } from "body-parser";


dotenv.config();


const app: Application = express();


sequelize.sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

  //routes imports


app.use(json());


app.use("/users", routes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

// Application's port
const port = process.env.PORT || 2002;


app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());


app.listen(port, () => console.log("Server started at port: ", port));

export { app };
