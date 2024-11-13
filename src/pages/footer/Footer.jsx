import '../footer/Footer.css'
import { FaGooglePlay,FaApple } from "react-icons/fa";
import React, { useState } from 'react';
import DownloadModal from '../downloadModal/DownloadModal';

function Footer() {
    const [showModal, setShowModal] = useState(false);

    const handleDownloadClick = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    return (
        <div className='footer'>
            <div className='footer_bg1'>
               <div className='footer_btn'>
               <button onClick={handleDownloadClick} className='btn1_app'><FaGooglePlay size={18}/><span className='icon_banner ms-1'>Google Play</span> </button>
               <button onClick={handleDownloadClick} className='btn2_app ms-1'><FaApple size={18}/><span className='icon_banner ms-1'>App Store</span></button>
               </div>
                <p className='footer_text'>
                Copyright © 2024 Vianinfo solutions, All rights reserved
                </p>
            </div>
            <div className='footer_text'>
            </div>
            <DownloadModal isOpen={showModal} onClose={closeModal} />
        </div>
    )
}

export default Footer