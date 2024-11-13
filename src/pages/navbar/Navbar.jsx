import React, { useState } from 'react';
import '../navbar/Navbar.css';
import logo from '../../assets/logo/Vian_Logo_Colored.png';
import DownloadModal from '../downloadModal/DownloadModal';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='Landing_page'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid me-5">
          <a className="navbar-brand" href="#">
            <img className='nav_logo' src={logo} alt="no_img" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav_bg_vian" href="#">Login</a>
              </li>
              <li className="nav-item">
                <button className="nav_btn rounded-pill" onClick={handleDownloadClick}>Download App</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <DownloadModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default Navbar;
