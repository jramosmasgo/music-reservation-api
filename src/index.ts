import app from "./app";
import cloudinaryConfig from "./config/cloudinary";
import sequelizeConnection from "./config/database";
import { initRelations } from "./config/relations";

sequelizeConnection.sync({ alter: true }).then(() => {
  initRelations();
  console.log("Database Conected");
});

cloudinaryConfig();

app.listen(app.get("port"), () => {
  console.log(`Server on port: ${app.get("port")}`);
});
