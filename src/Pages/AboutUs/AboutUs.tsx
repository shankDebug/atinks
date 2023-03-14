import React from 'react';
import logo from '../../assets/images/A.T-inks-logo.png';
import BasicTab from './Tab/BasicTab';

const AboutUs = () => {

        return (
            <>
            <div style={{backgroundColor: '#ffffff', width: '85%', margin: '30px 20px', borderRadius: '5px'}}>
            <div style={{fontWeight: 'normal', fontSize: '4vh', margin: '2rem'}}>
                About Us
            </div>
            <br/>
            <div style={{ display: 'flex'}}>
                <div style={{marginLeft: '2rem', display: 'flex'}}>
                    <img src={logo} alt='' style={{height: '90px', width: '100px'}}/>
                    <div>
                        <div style={{fontWeight: 'normal', fontSize: '3vh', marginTop: '0.5rem'}}>A.T.Inks</div>
                        <div style={{color: '#8f8f8f', fontSize: '2vh', marginTop: '0.5rem'}}>Digital Inks</div>
                    </div>
                </div>
                <div style={{ margin: '10px 50px'}}> <a href='#'>Verify Company</a></div>
            </div>
            <div style={{margin: '2rem', width: '60rem', color: '#9b9b9b'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime debitis illum porro, officiis odio quisquam dolore similique ea blanditiis.
            </div>
            <BasicTab/>
            </div>
            </>
        );
}

export default AboutUs;