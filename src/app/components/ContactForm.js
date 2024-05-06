
"use client"
// import Link from "next/link"
// import { Link } from 'next-view-transitions'

export default function Contact() {

    async function handleSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target)
        try {
  
            const response = await fetch('/api/contact', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };


    return (
        <>
                    < form className="" onSubmit={handleSubmit}>
                        <div className="flex-column-left field">
                            < label htmlFor='form-name'>Name</label>
                            < input type='text' id='form-name' name="name" className="" />  
                        </div>
                        <div className="flex-column-left field" >
                            < label htmlFor='form-email'>Email</label>
                            < input type='email' id='form-email' name="email" className="" />
                        </div>
                        <div className="flex-column-left field" >
                            < label htmlFor='form-subject'>Subject</label>
                            < input type='text' id='form-subject' name="subject" className="" />
                        </div>
                        <div className="flex-column-left field">
                            < label htmlFor='form-message'>Message</label>
                            < textarea id='form-message' name="message" rows="4" cols="50" className="" />
                        </div>
                        {/* <div className="btn-secondary">
                        < input type='submit'onClick={(e)=>{handleSubmit(e)}}/>
                        </div> */}
                        <div className="flex-row-right">
                            <button className="btn-secondary" type="submit">
                                <div className="text-2">Send</div>
                            </button>
                        </div>
                    </form >
        </>
    )
}