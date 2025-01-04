
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'qpert345@gmail.com',
        pass: 'fzoj gmqz lehq jdiq'
    }
});

let mailOptions = {
    from: 'qpert345@gmail.com',
    to: 'f0997502@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});