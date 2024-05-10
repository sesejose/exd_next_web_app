import { NextResponse, NextRequest } from 'next/server'

const nodemailer = require('nodemailer');

console.log(process.env);

// Handles POST requests to /api

// Import dotenv and configure it
import dotenv from 'dotenv';
dotenv.config();

export async function POST(request) {

    // Logging environment variables
    console.log("NEXT_PUBLIC_EMAIL_USERNAME:", process.env.NEXT_PUBLIC_EMAIL_USERNAME);
    console.log("NEXT_PUBLIC_EMAIL_PASSWORD:", process.env.NEXT_PUBLIC_EMAIL_PASSWORD);
    console.log("NEXT_PUBLIC_PERSONAL_EMAIL:", process.env.NEXT_PUBLIC_PERSONAL_EMAIL);

    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    

    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com", // Outlook SMTP server
        port: 587, // Outlook SMTP port
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'js@exd.dk', // Your Outlook email address
            pass: 'mgmthcmmyjnjmmyv', // Your Outlook email password or app password
            // pass: 'Sesejose123', // Your Outlook email password or app password
        },
    });

    // Next we need to write the code to actually send the email. I wrap this in a try except block to catch any errors.
    try {

        const mail = await transporter.sendMail({
            from: username, //the username of the email account you want to use
            to: myEmail, //where you want the email to land up
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}