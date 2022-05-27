"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseAPI_1 = __importDefault(require("../core/responseAPI"));
const ErrorMiddleware = (err, _req, res, _next) => {
    var _a;
    new responseAPI_1.default({
        error: err,
        message: err.message,
    }).sendError(res, (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500);
};
exports.default = ErrorMiddleware;
