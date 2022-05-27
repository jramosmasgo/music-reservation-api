"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.createAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createAuthToken = (payload) => jsonwebtoken_1.default.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: "24h",
});
exports.createAuthToken = createAuthToken;
const validateToken = (token) => jsonwebtoken_1.default.verify(token, `${process.env.JWT_AUTH_SECRET}`);
exports.validateToken = validateToken;
