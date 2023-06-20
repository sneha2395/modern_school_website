import React from 'react';
import "../assets/css/navbar.css";
import FirstImage from "../assets/Layer 51.png";
import SecondImage from "../assets/Layer 136.jpg";
import ThirdImage from "../assets/Layer 135.png";
import FourthImage from "../assets/Layer 134.png";



const ThirdSection = () => {
  return (
    <div>
        <div className="third-section-container">
            <div className='third-section-card'>
                <img src={FirstImage} className='third-section-card-image'/>
                <div className='third-section-card-inner'>
                    <p className='third-section-card-text1'>
                        ADMISSION
                        <br/>
                        <span className='third-section-card-text2'>
                        INFORMATION
                        </span>
                    </p>
                    
                    <p className='third-section-card-text3'>
                          For enrollment enquiry, call us @ 9876543211
                    </p>
                    <button className='third-section-card-button'>
                          Learn More
                    </button>
                </div>
            </div>
            <div className='third-section-card'>
                <img src={SecondImage} className='third-section-card-image'/>
                <div className='third-section-card-inner'>
                    <p className='third-section-card-text1'>
                        SESSION
                        <br/>
                        <span className='third-section-card-text2'>
                        2021 - 2022
                        </span>
                    </p>
                    
                    <p className='third-section-card-text3'>
                          For enrollment enquiry, call us @ 9876543211
                    </p>
                    <button className='third-section-card-button'>
                          Learn More
                    </button>
                </div>
            </div>
            <div className='third-section-card'>
                <img src={ThirdImage} className='third-section-card-image'/>
                <div className='third-section-card-inner'>
                    <p className='third-section-card-text1'>
                        ACADEMICS
                        <br/>
                    </p>
                    
                    <p className='third-section-card-text3'>
                          For enrollment enquiry, call us @ 9876543211
                    </p>
                    <button className='third-section-card-button'>
                          Learn More
                    </button>
                </div>
            </div>
            <div className='third-section-card'>
                <img src={FourthImage} className='third-section-card-image'/>
                <div className='third-section-card-inner'>
                    <p className='third-section-card-text1'>
                        TRANSPORT
                        <br/>
                        
                    </p>
                    
                    <p className='third-section-card-text3'>
                          For enrollment enquiry, call us @ 9876543211
                    </p>
                    <button className='third-section-card-button'>
                          Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection;