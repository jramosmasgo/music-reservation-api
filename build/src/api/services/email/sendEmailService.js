"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sendEmail = (recipient, subject, templateName, values) => {
    return new Promise(function (resolve, reject) {
        const transporterObject = {
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: `${process.env.EMAIL_SENDER}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
            },
        };
        const transporter = nodemailer_1.default.createTransport(transporterObject);
        const emailTemplate = fs_1.default.readFileSync(path_1.default.join(__dirname, `../../resources/templatesEmails/${templateName}`), "utf8");
        const template = handlebars_1.default.compile(emailTemplate);
        const htmlToSend = template(values);
        const message = {
            from: `Music Reservation <${process.env.EMAIL_USER}>`,
            to: `Recipient <${recipient}>`,
            subject: `${subject}`,
            html: htmlToSend,
        };
        transporter.sendMail(message, (err, info) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(info);
            }
        });
    });
};
exports.sendEmail = sendEmail;
