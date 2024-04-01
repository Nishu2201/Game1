import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Scanner from '../Scanner/Scanner';
import Phone from '../../../Images/homepage_about/mobile.png';
import Girl from '../../../Images/homepage_about/character.png';
import PinkCircle from '../../../Images/homepage_about/pink circle.png';
import Cross from '../../../Images/homepage_about/cross.png';
import ZIgZag from '../../../Images/homepage_about/zig zag_.png';
import Square from '../../../Images/homepage_about/square.png';
import pinkSq from '../../../Images/homepage_about/pink square_.png';
import GreenCircle from '../../../Images/homepage_about/green circle.png';
import './About.css';
const About = () => {
   
    useEffect(() => {
        // window.addEventListener('load', function() {
        //     setTimeout(function() {
        //       AOS.refresh();
        //     }, 100);
        //   });
        AOS.init({
          duration: 1000, 
          once: false, 
        });
    
        return () => {
          AOS.refresh();
        };
      }, []);
  return (
    <div className='About'>
        <Scanner/>
        <div className='About-content'>
        <div className='Abt-left'>
        <img src={Girl}  alt='Girl-pic'className='GirlPic' data-aos="fade-left"/>
          <img src={Phone} alt='Ludo-Mobile' className='PhonePic ' data-aos="fade-right"/>
          <img src={PinkCircle} alt='Circle' className='Circle1'/>
          <img src={Square} alt='Circle' className='Square1'/>
        </div>
        <div className='Abt-Rght'>
            <img src={Cross} alt='Cross' className='CrossPic'/>
            <img src={ZIgZag} alt='zigzag' className='ZigZag'/>
            <div className='About-text'>
                        <h2 className='About-h2'>About</h2>
            <p className='About-para'>Welcome to Ludo Cash, your premier destination for thrilling 
                real-money Ludo gameplay! At Ludo Cash, we combine the excitement
                 of classic board game with thrill of competing for cash prizes. 
                 With our user-friendly platform and secure payment system, 
                 players can enjoy hours of fun, strategy, and rewards. 
                 Join our vibrant community of ludo enthusiasts today 
                 and experience the next level of gaming excitement with Ludo Cash!</p>           
                  </div>
                  <img src={GreenCircle} alt='Cross' className='Circle2'/>
            <img src={pinkSq} alt='zigzag' className='Square2'/>
                  </div>
        </div>
        </div>
  )
}

export default About