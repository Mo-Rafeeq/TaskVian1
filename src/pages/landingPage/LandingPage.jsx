import React from 'react'
import Navbar from '../navbar/Navbar';
import '../landingPage/LandingPage.css';
import { FaUserCircle } from "react-icons/fa";
import Footer from '../footer/Footer';
import { FiChevronDown } from "react-icons/fi";

function LandingPage() {
    return (
        <>
            <Navbar />
            <section className="landing_page">
                <div className="landing_page_style">
                    <div className="landing_card">
                        <FaUserCircle size={79} />
                        <div>
                            <h4 className="landing_heading">Username</h4>
                            <p className="landing_paragraph">Profession</p>
                        </div>
                    </div>
                    <h1 className="landing_heading2 mt-4">Hi User, Welcome to Vian HR Connect</h1>
                    <p className="landing_paragraph2 mt-4">Select your work mode here</p>
                    <div className="custom-dropdown mt-4">
                        <select className="custom-select">
                            <option value="office">Work From Office</option>
                            <option value="home">Work From Home</option>
                        </select>
                        <FiChevronDown className="dropdown-icon" />
                    </div>
                    <button className="landing_start_btn mt-4">Let’s Start</button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LandingPage;