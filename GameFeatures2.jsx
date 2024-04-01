import React,{useEffect} from 'react'
import './GameFeatures2.css';
import AOS from "aos";
import "aos/dist/aos.css";
import mobile2 from '../../../Images/gamefeatures_2/MOBILE.png';
import coin1 from '../../../Images/gamefeatures_2/coin 1.png';
import coin2 from '../../../Images/gamefeatures_2/coin 2.png';
import coin3 from '../../../Images/gamefeatures_2/coin 3_.png';
import coin4 from '../../../Images/gamefeatures_2/coin 4_.png';
import coin5 from '../../../Images/gamefeatures_2/coin 5_.png';
import coin6 from '../../../Images/gamefeatures_2/coin 6_.png';
import coin7 from '../../../Images/gamefeatures_2/coin 7_.png';
import arrow1 from '../../../Images/gamefeatures_2/arrow 1_.png';
import arrow2 from '../../../Images/gamefeatures_2/arrow 2_.png';
import walletBack from '../../../Images/gamefeatures_2/wallet back.png';
import walletFront from '../../../Images/gamefeatures_2/wallet front_.png';
import coin8 from '../../../Images/gamefeatures_2/coin 8_.png';
import coin9 from '../../../Images/gamefeatures_2/coin 9_.png';
import coin10 from '../../../Images/gamefeatures_2/coin 10.png';
import coin11 from '../../../Images/gamefeatures_2/coin 11.png';
import Line from '../../../Images/gamefeatures_1/Line 2.png';
import Char from '../../../Images/gamefeatures_2/cs icon.png';
const GameFeature2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className='Game2Top'>
       <img src={Line} alt="" className='Line2'/>
          <div className='Fest2content'>
    <div className='Fets2left'>
      <div className='lft2-imgs'>
     <img src={mobile2} alt="Mobile-png" className='fest2pic1'/>
     {/* <div className='Coins'> */}
      <img src={coin1} alt=""  className='FirstCoin'/>
      <img src={coin2} alt=""  className='FirstCoin'/>
      <img src={coin3} alt=""  className='FirstCoin'/>
      <img src={coin4} alt=""  className='FirstCoin'/>
      <img src={coin5} alt=""  className='FirstCoin'/>
      <img src={coin6} alt=""  className='FirstCoin'/>
      <img src={coin7} alt=""  className='FirstCoin'/>
      {/* </div> */}
     <img src={arrow1} alt="" className='Arrow1'/>
     <img src={arrow2} alt="" className='Arrow2'/>
     <img src={coin8} alt="" className='Coin-8'/>
     <img src={coin9} alt="" className='Coin-9'/>
     <img src={coin10} alt="" className='Coin-10'/>
     <img src={coin11} alt="" className='Coin-11'/>
     <div className='wallets'>
     <img src={walletBack} alt="game-box" className='fest2Pic2'/>
     <img src={walletFront} alt="game-box" className='fest2Pic3'/>
   
     </div>
     {/* </div> */}
     </div>
    <div className='Fest2Text2'  data-aos="fade-right">
     <h3 className='text2-h3'> Safe,Secure & Legal</h3>
     <p className='text2-p'>-High end payment security</p>
     <p className='text2-p'>-No financial commitment, just rewards</p>
     <p className='text2-p'>-Fair play guarantee</p>
     </div>
    </div>
    <img src={Line} alt="" className='Fets2Line-pic'/>
    <div className='Fets2rght'>
    <div className='Fets2Text1'  data-aos="fade-left">
     <h3 className='text2-h3'> No investment,Just earnings</h3>
     <p className='text2-p'>-Zero investment,pure earnings</p>
     <p className='text2-p'>-Earn real money without any initial investment</p>
     <p className='text2-p'>-Profit without spending</p>
     </div>
     <div className='Fets2rght-imgs'>
     <img src={Char} alt="" className='Char-pic'/>
     </div>
    </div>
    </div>
</div>
    )
}

export default GameFeature2;