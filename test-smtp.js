const nodemailer = require('nodemailer');

// Create transporter object
const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Outlook SMTP server
    port: 587, // Outlook SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'js@exd.dk', // Your Outlook email address
        pass: 'mgmthcmmyjnjmmyv', // Your Outlook email password or app password
    },
});

// Email options
const mailOptions = {
    from: 'your_outlook_email@example.com', // Sender email address
    to: 'recipient@example.com', // Recipient email address
    subject: 'Test Email from Nodemailer', // Email subject
    text: 'This is a test email sent from Nodemailer.', // Email body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
