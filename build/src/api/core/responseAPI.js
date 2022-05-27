"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseApi {
    constructor(param) {
        var _a;
        this.ok = true;
        this.message = "";
        this.data = null;
        this.data = (_a = param.data) !== null && _a !== void 0 ? _a : null;
        this.error = param.error;
        this.message = param.message;
    }
    sendSuccess(res) {
        return res.status(200).json({
            ok: true,
            message: this.message,
            data: this.data,
            error: null,
        });
    }
    sendError(res, statusCode) {
        return res.status(statusCode).json({
            ok: false,
            message: this.message,
            data: null,
            error: this.error,
        });
    }
}
exports.default = ResponseApi;
