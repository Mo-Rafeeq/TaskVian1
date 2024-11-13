import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../homePage/HomePage.css';
import homeImage from '../../assets/images/home_img.png';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
import TollFreeNumber from '../tollFreeNumber/TollFreeNumber';

const HomePage = () => {
    return (
        <div className='Home_page'>
            <div className='Landing_page'>
                <Navbar />
            </div>

            <div className="d-flex col-lg-12">
                <div className='col-lg-7'>
                    <div className='homePage_head'>
                        <a className='homePage_head_content'>VIAN HR CONNECT</a>
                        <p className='head_paragraph mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscinG</p>
                        <p className='head_discr mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat ornare ligula, nec ullamcorper eros. Duis aliquet dui ac eros maximus commodo. Pellentesque quam quam, fermentum vitae aliquam in, commodo ac risus. Ut et aliquam ex. Mauris eget aliquam neque. Maecenas id nisi suscipit, facilisis justo vel, cursus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <div className='mt-5'>
                            <button className='rounded-pill Login_btn'>Login Now</button>
                            <button className='rounded-pill Login_btn_bg'> <span className='Login_font_bg'>Start Your Free Trail</span></button>
                        </div>

                        <div className='mt-5 ms-4'>
                            <TollFreeNumber />
                        </div>

                    </div>
                </div>
                <div className="col-lg-5">
                    <div className='hai'></div>
                    <img className='home_img' src={homeImage} alt="" />
                </div>
            </div>

            <div className='home_footer' style={{}}>
                <Footer />
            </div>

        </div>
    );
};

export default HomePage;
