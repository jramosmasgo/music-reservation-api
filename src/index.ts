import app from "./app";
import cloudinaryConfig from "./config/cloudinary";
import sequelizeConnection from "./config/database";

sequelizeConnection.sync({ alter: true }).then(() => {
  console.log("Database Conected");
});

cloudinaryConfig();

app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
