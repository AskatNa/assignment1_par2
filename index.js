const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const mailOptions = {
    from: process.env.EMAIL,
    to: 'f0997502@gmail.com',
    subject: 'Text message from Nodemailer',
    text: 'Text from Nodemailer.',
    html: '<p>Hello</p>',
    attachments: [
        {
            filename: 'File.txt',
            content: 'Content of File.txt.',
        },
    ],
};

const sendEmail = async () => {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email was sent:', info.response);
    } catch (error) {
        console.error('Error has occured:', error.message);
    }
};

sendEmail();
