import React, { useState } from 'react';
import './ContactForm.css';
import {db} from '../firebase';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
            .then(()=>{
                alert("Message has been submitted");
            })
            .catch((error)=>{
                alert(error.message);
            });

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
    };
    return ( 
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                <label>Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                <label>Subject</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e)=> setSubject(e.target.value)}/>
                <label>Message</label>
                <textarea row="6" 
                    placeholder='Type your message here'
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}/>
                <button className='btn'>Submit</button>
            </form>
        </div>
     );
}

export default ContactForm;