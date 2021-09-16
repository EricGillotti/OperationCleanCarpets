import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Pages.css';

const ContactUs = () => {
    return <div className="PageArea">
        <h1 className="Title">Contact Us</h1>
        <div className="ContactUsContainer">
            <div className="ContactUsCenterColumn">
                <SocialIcon url="https://www.linkedin.com/in/gary-parenti-jr-9a6a0468"/>
                <SocialIcon url="https://www.facebook.com/Gparentisprofessionalcarpetcleaning/" />
                <p>Phone: (860) 637-2392</p>
                <p>Email: garyparentijr8@gmail.com</p>
                <p>Mailing Address: P.O. Box 6264 Wolcott, CT 06716</p>

                <p>Hours Of Operation</p>
                <p>Monday-Saturday: 9:00 A.M. - 5:00 P.M.</p>
                <p>Sunday: Closed</p>
            </div>
        </div>
    </div>
}

export default ContactUs