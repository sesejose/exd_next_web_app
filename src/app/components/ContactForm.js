export default function Form(){
    return (
        <>
                    < form className="" >
                        < formGroup className="flex-column-left field">
                            < label htmlFor='name'>Name</label>
                            < input type='text' name='name' className="" />  
                        </formGroup>
                        < formGroup className="flex-column-left field" >
                            < label htmlFor='email'>Email</label>
                            < input type='email' name='email' className="" />
                        </formGroup>
                        < formGroup className="flex-column-left field" >
                            < label htmlFor='subject'>Subject</label>
                            < input type='text' name='subject' className="" />
                        </formGroup>
                        < formGroup className="flex-column-left field">
                            < label htmlFor='message'>Message</label>
                            < textarea name='message' rows="4" cols="50" className="" />
                        </formGroup>
                        <div className="btn-secondary">
                        < input type='submit'/>
                        </div>
                    </form >
        </>
    )
}