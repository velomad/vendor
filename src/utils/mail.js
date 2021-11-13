const nodemailer = require('nodemailer')

const sendEmail = async () => {
    console.log('sendEmail sendEmail');

    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "sagaryc111@gmail.com",
            pass: "xtrainn213"
        }
    });
    const message = {
        from: "sagaryc111@gmail.com",
        to: "bendreajay007@gmail.com",
        subject: "New Passengers and Goods Report",
        text: "Hello there!  Here I am attaching excel report for Sales Progress! PFA.",
        html: 'content',
    };
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log('Errpr Email',err)
            return false;
        } else {
            console.log('Success')
            return true;
        }
    });

    return true
}


module.exports = {
    sendEmail
}