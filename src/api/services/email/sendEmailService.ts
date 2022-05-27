import nodemailer from "nodemailer";
import hbs from "handlebars";
import fs from "fs";
import path from "path";

export const sendEmail = (
  recipient: string,
  subject: string,
  templateName: string,
  values: Object
) => {
  return new Promise(function (resolve, reject) {
    const transporterObject = {
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: `${process.env.EMAIL_SENDER}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
    };

    const transporter = nodemailer.createTransport(transporterObject);

    const emailTemplate = fs.readFileSync(
      path.join(__dirname, `../../resources/templatesEmails/${templateName}`),
      "utf8"
    );

    const template = hbs.compile(emailTemplate);
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
      } else {
        resolve(info);
      }
    });
  });
};
