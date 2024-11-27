import React from 'react';
import '../downloadModal/DownloadModal.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

function DownloadModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='banner_img'>
                    <button className="close-btn" onClick={onClose}><IoMdCloseCircleOutline size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DownloadModal;
