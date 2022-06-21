const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporterDetails = smtpTransport({
    host: "mail.rahemehr.ir",
    port: "465",
    secure: true,
    auth: {
        user: "admin@rahemehr.ir",
        pass: "112233@Ali@332211"
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendEmail = (email,fullname,subject,message) => {
    const transporter = nodeMailer.createTransport(transporterDetails);
    transporter.sendMail({
        from: "admin@rahemehr.ir",
        to: email,
        subject: subject,
        html: `<h1>سلام ${fullname}</h1>
            <p>${message}</p>`
    });
}