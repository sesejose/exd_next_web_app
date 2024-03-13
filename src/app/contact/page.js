'use client'

import form from "../../app/styles/form.css"
import Form from "../components/ContactForm"


export default function Contact(){
    return(
        <>
        
        <div className="wide">
            <div id="contact-form">
                <div className="grid-center">

                    <div className="col-1-6">
                        <h2 className="pb-medium">Contact Us</h2>
                        <div className="text-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        {/* It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                        </div>
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