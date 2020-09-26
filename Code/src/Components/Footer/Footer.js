import React from 'react';
import location from '../../Icons/location-40.png';
import phone from '../../Icons/phone-30.png';
import email from '../../Icons/post-30.png';
import './Footer.css';

//UI Component
const Footer = () => {
    return(
        <div className="Footer" id = "Footer">
            <div className="row">
                <div className="col s6">
                    <div className="col s1">
                        <img src = {location} alt = "Location Icon"/>
                        <br></br>
                        <img src = {phone} alt = "Phone Icon"/>
                        <br></br>
                        <img src = {email} alt = "Email Icon"/>
                    </div>
                    <div className="col s11">
                        <b>Adyala Road</b>
                        <br></br>
                        <p></p>
                        <b>+92 300 5397321</b>
                        <br></br>
                        <p></p>
                        <b>Danishmehmodd@gmail.com</b>  
                    </div>
                </div>
                <div className="col s6">
                    <b>About This Company</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam accusamus aliquam quasi? Itaque ab cumque molestias officia impedit hic, repudiandae, est debitis amet expedita quis velit voluptatem, exercitationem.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;