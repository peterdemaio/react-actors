import React, { Component} from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Best Impression"></input>
                <button>Join Us!</button>
                <h2>Contact</h2>
                <p>1-800-WE-REACT</p>
                <p>info@ReactActors.com</p>
            </div>
        )    
    }
}

export default Contact;