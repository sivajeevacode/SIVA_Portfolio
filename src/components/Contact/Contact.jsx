import React, { useState } from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
const Contact = () => {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4084db3e-f301-4d2b-8684-71c9750abc77");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div className='contact' id='contact'>
       <div className="top">
                <h3>CONTACT</h3>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>

        <div className="bottom">
            <form onSubmit={onSubmit}>
               <div className="input-group">
                   <label>Name</label>
                   <input type="text" name='name'  placeholder='Enter Your Name' required />
               </div>

               <div className="input-group">
                   <label>Email</label>
                   <input type="email" name='email' placeholder='Enter Your Email' required />
               </div>

               <div className="input-group">
                   <label>Message</label>
                   <textarea name='message' placeholder='Enter Your Message'  required></textarea>
               </div>
               <button type='submit'>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
