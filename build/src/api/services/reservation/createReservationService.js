"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createReservationData_1 = __importDefault(require("../../data/reservation/createReservationData"));
const findUserDataByField_1 = __importDefault(require("../../data/users/findUserDataByField"));
const sendEmailService_1 = require("../email/sendEmailService");
const createReservationService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, findUserDataByField_1.default)({ id: data.user });
    if (user) {
        yield (0, sendEmailService_1.sendEmail)(user.email, "Reserva Registrada", "registeredReservation.hbs", {
            username: user.fullname,
            url: `${process.env.URL_FRONTED}/reservations/${data.user}`,
        });
    }
    return yield (0, createReservationData_1.default)(data);
});
exports.default = createReservationService;
