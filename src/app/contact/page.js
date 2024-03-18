'use client'

import form from "../../app/styles/form.css"
import Form from "../components/ContactForm"
import Link from "next/link"


export default function Contact(){
    return(
        <>
        
        <div className="wide">
            <div id="contact-form">
                <div className="grid-center">

                    <div className="col-1-6 ptb-large">
                        <h2 className="pb-medium">Let's Stay Connected!</h2>
                        <div className="text-1">Reach out via phone, email, or the contact form. Whether you have questions about our services, want to discuss a project, or simply say hello, we're here to listen, support, and collaborate. Let's start a conversation today.
                        </div>
                        <ul className="ptb-medium">
                            <li className="flex-row-left pb bold">
                                <span className="material-symbols-rounded">phone</span>
                                <div>+45 20 25 03 33</div>
                            </li>
                            <li className="flex-row-left pb bold">
                                <span className="material-symbols-rounded">mail</span>
                                <Link href={"mailto:lk@exd.dk"}>info@exd.dk</Link>
                            </li>
                            <li className="flex-row-left pb bold">
                                <span className="material-symbols-rounded">globe</span>
                                <Link href={"http://exd.dk"}>www.exd.dk</Link>
                            </li>
                            <li className="flex-row-left pb bold">
                                <span className="material-symbols-rounded">location_on</span>
                                Linnésgade 25, 1361 Copenhagen
                            </li>
                            <li className="flex-row-left pb bold">
                                <span className="material-symbols-rounded">home</span>
                                CVR. 41994274
                            </li>
                        </ul>
                    </div>
        
                    <div className="col-7-13">
                        <Form></Form>
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}