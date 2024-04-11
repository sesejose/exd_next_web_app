import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    // Logging environment variables
    console.log("NEXT_PUBLIC_USERNAME:", process.env.NEXT_PUBLIC_BURNER_USERNAME);
    console.log("NEXT_PUBLIC_PASSWORD:", process.env.NEXT_PUBLIC_EMAIL_PASSWORD);
    console.log("NEXT_PUBLIC_PERSONAL_EMAIL:", process.env.NEXT_PUBLIC_PERSONAL_EMAIL);

    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    // const username = process.env.NODEMAILER_EMAIL;
    // const password = process.env.NODEMAILER_PW;
    

    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: 'username',
          pass: 'password',
        },
        secure: true,
      })

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