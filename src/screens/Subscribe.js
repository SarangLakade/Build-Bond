import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_f6ce9jo', 'template_1r53a0v', e.target, 'user_nk5CLddP491SeT0Kdlj5P')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}