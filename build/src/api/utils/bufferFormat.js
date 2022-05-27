"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferFormat = void 0;
const parser_1 = __importDefault(require("datauri/parser"));
const path_1 = __importDefault(require("path"));
const parser = new parser_1.default();
const bufferFormat = (file) => parser.format(path_1.default.extname(file.originalname).toString(), file.buffer);
exports.bufferFormat = bufferFormat;
