const express = require('express');
require('dotenv').config();
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const app = express();


const PORT = 80;

app.use(express.json());

const myOAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
)

myOAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});

const myAccessToken = myOAuth2Client.getAccessToken();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.static(`${__dirname}/../front/build`));

app.post('/', (req, res) => {
    console.log(req.body)
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.USER_MAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: myAccessToken
        },
    })

    const mailOptions = {
        from: {
            name: req.body.name,
            address: req.body.mail
        },
        to: 'gustin.samuel@gmail.com',
        subject: req.body.subject,
        text: req.body.text,
        replyTo: req.body.mail
    }

    console.log(mailOptions)

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`, {__dirname})
});
