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
    subject: 'Тестовое письмо от Nodemailer',
    text: 'Привет! Это тестовое письмо, отправленное через Nodemailer и Node.js.',
    html: '<p><b>Привет!</b> Это тестовое письмо, отправленное через <i>Nodemailer</i> и Node.js.</p>',
    attachments: [
        {
            filename: 'File.txt',
            content: 'Это содержание файла File.txt.',
        },
    ],
};

const sendEmail = async () => {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Письмо отправлено успешно:', info.response);
    } catch (error) {
        console.error('Ошибка при отправке письма:', error.message);
    }
};

sendEmail();
