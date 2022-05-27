"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationError_1 = require("../core/ApplicationError");
const token_1 = require("../utils/token");
const tokenValidationMiddleware = (req, _res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return next(new ApplicationError_1.ApplicationError(401, "No token provided", "Token Error"));
        }
        const { idUser } = (0, token_1.validateToken)(authorization.replace("Bearer ", ""));
        if (!idUser)
            return next(new ApplicationError_1.ApplicationError(401, "Unvalid token", "Unauthorized"));
        req.headers.idUser = idUser;
        return next();
    }
    catch (error) {
        if (error.message === "jwt expired")
            return next(new ApplicationError_1.ApplicationError(401, error.message, "Unauthorized"));
        return next(error);
    }
};
exports.default = tokenValidationMiddleware;
