//dependences
import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import path from 'path';
import helmet from "helmet";
import cors from "cors";

//imported port
import { PORT } from "./config";

//imported routes
import taskRoutes from "./routes/tasks.routes";
import userRoutes from "./routes/users.routes";

//app declaration
const app = express();

//app setting port
app.set('port', PORT);

//middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(
    fileUpload({
      tempFileDir: "./upload",
      useTempFiles: true,
    })
  );

app.use(express.static(path.join(__dirname, '../client/build')));
app.use("/api", taskRoutes);
app.use("/api", userRoutes);
app.use("/*",(req,res)=>res.status(404).send("bad route"))
export default app;