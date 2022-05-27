import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import express, { Application } from "express";
import imageRoute from "./api/routes/imageRoutes";
import userRoute from "./api/routes/userRoutes";
import companyRoute from "./api/routes/companyRoutes";
import collaboratorRoute from "./api/routes/collaboratorRoutes";
import MusicRoomRoute from "./api/routes/musicRoomRoutes";
import MusicRoomImageRoute from "./api/routes/musicRoomImageRoutes";
import bandRoute from "./api/routes/bandRoutes";
import bandMemberRoute from "./api/routes/bandMemberRoutes";
import reservationRoute from "./api/routes/reservationsRoutes";
import ErrorMiddleware from "./api/middlewares/errorMiddleware";

const app: Application = express();
app.set("port", process.env.PORT || 4000);

app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(imageRoute);
app.use(userRoute);
app.use(companyRoute);
app.use(collaboratorRoute);
app.use(MusicRoomRoute);
app.use(MusicRoomImageRoute);
app.use(bandRoute);
app.use(bandMemberRoute);
app.use(reservationRoute);

app.use(ErrorMiddleware);
export default app;
