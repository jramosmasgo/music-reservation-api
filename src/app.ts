import express, { Application } from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./api/routes/userRoutes";
import companyRoute from "./api/routes/companyRoutes";
import collaboratorRoute from "./api/routes/collaboratorRoutes";
import MusicRoomRoute from "./api/routes/musicRoomRoutes";
import MusicRoomImageRoute from "./api/routes/musicRoomImageRoutes";
import ErrorMiddleware from "./api/middlewares/errorMiddleware";

const app: Application = express();
app.set("port", process.env.PORT || 4000);

app.use(express.json());

app.use(userRoute);
app.use(companyRoute);
app.use(collaboratorRoute);
app.use(MusicRoomRoute);
app.use(MusicRoomImageRoute);

app.use(ErrorMiddleware);
export default app;
