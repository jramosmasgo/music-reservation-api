"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const imageRoutes_1 = __importDefault(require("./api/routes/imageRoutes"));
const userRoutes_1 = __importDefault(require("./api/routes/userRoutes"));
const companyRoutes_1 = __importDefault(require("./api/routes/companyRoutes"));
const collaboratorRoutes_1 = __importDefault(require("./api/routes/collaboratorRoutes"));
const musicRoomRoutes_1 = __importDefault(require("./api/routes/musicRoomRoutes"));
const musicRoomImageRoutes_1 = __importDefault(require("./api/routes/musicRoomImageRoutes"));
const bandRoutes_1 = __importDefault(require("./api/routes/bandRoutes"));
const bandMemberRoutes_1 = __importDefault(require("./api/routes/bandMemberRoutes"));
const reservationsRoutes_1 = __importDefault(require("./api/routes/reservationsRoutes"));
const errorMiddleware_1 = __importDefault(require("./api/middlewares/errorMiddleware"));
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 4000);
app.use(express_1.default.json({ limit: "50mb" }));
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
}));
app.use(imageRoutes_1.default);
app.use(userRoutes_1.default);
app.use(companyRoutes_1.default);
app.use(collaboratorRoutes_1.default);
app.use(musicRoomRoutes_1.default);
app.use(musicRoomImageRoutes_1.default);
app.use(bandRoutes_1.default);
app.use(bandMemberRoutes_1.default);
app.use(reservationsRoutes_1.default);
app.use(errorMiddleware_1.default);
exports.default = app;
