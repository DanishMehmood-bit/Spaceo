import React from 'react';
import Image1 from '../../Images/negspace.jpg';
import Image2 from '../../Images/spaceart.jpg';
import Image3 from '../../Images/blackblue.jpg';
import './Gallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//UI Component
const Gallery = () => {
    return (
        <div className="container Gallery" id = "Gallery">
            <h3 className="center">Gallery</h3>
            <hr className = "line"></hr>
            <Carousel>
                <div>
                    <img src={Image1} className = "firstImage" alt = "Scattering Sky" />
                    <p className="legend">Scattering Sky</p>
                </div>
                <div>
                    <img src={Image2} className = "secondImage" alt = "Space Art" />
                    <p className="legend">Space Art</p>
                </div>
                <div>
                    <img src={Image3} className = "thirdImage" alt = "Beyond The Naked Eye"/>
                    <p className="legend">Beyond The Naked Eye</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Gallery;