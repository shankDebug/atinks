import React from 'react';
import logo from '../../assets/images/A.T-inks-logo.png';

const AboutUs = () => {

        return (
            <>
            <div style={{backgroundColor: '#ffffff', width: '85%', margin: '30px 20px', borderRadius: '5px'}}>
            <div style={{fontWeight: 'normal', fontSize: '4vh', margin: '2rem'}}>
                About Us
            </div>
            <br/>
            <div>
                <div style={{marginLeft: '2rem', display: 'flex'}}>
                    <img src={logo} alt='' style={{height: '90px', width: '100px'}}/>
                    <div>
                        <div style={{fontWeight: 'normal', fontSize: '3vh', marginTop: '0.5rem'}}>A.T.Inks</div>
                        <div style={{color: '#8f8f8f', fontSize: '2vh', marginTop: '0.5rem'}}>Digital Inks</div>
                    </div>
                </div>
                <div></div>
            </div>
            </div>
            </>
        );
}

export default AboutUs;