import React, {useEffect} from 'react'
import './Scanner.css';
// import AOS from "aos";
// import "aos/dist/aos.css";
import ScanDice from '../../../Images/homepage_about/scan DICE.png';
import Corner from '../../../Images/homepage_about/scan corners.png';
import QR from '../../../Images/homepage_about/QR.png';
const Scanner = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000, 
  //     once: false, 
  //   });

  //   return () => {
  //     Aos.refresh();
  //   };
  // }, []);
  return (
    <div className='Scan'>
        <div className='ScanLft'>
        <img src={ScanDice} alt='ScanDice'className='ScanerDice' data-aos="fade-right" data-aos-delay="500" data-aos-duration="2000" />
       <div className='Scan-text'>
        <h1 className='Scan-h1'>Scan Code to Download</h1>
        <h1 className='Scan-h2'>ludo cash app now!</h1>
        </div>
        </div>
        <div className='ScanRght'>
            <img src={Corner} alt="Scanner-corner" className='QrCode'/>
        <img src={QR} alt='QR-code' className='QrCode'/>
        </div>
    </div>
  )
}

export default Scanner