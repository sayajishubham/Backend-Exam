const nodemailer = require("nodemailer");
require("dotenv").config();
async function Mail(useremail, htmltemplate) {
    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.HOST,
            pass: process.env.HOST_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: process.env.HOST,
        to: useremail,
        subject: "conformation",
        html: htmltemplate,
    });

    return info;
}

module.exports = Mail;
