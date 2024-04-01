import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './FirstPage.css'
import leftArrow from '../../../Images/HomePic/left arrow_.png';
import lftBrket from '../../../Images/HomePic/left  bracket_.png';
import pawn1 from '../../../Images/HomePic/blue pawn.png';
import pawn1Motion from '../../../Images/HomePic/motion-pawn1.png';
import pawn2Motion from '../../../Images/HomePic/motion-pawn2.png';
import pawn2 from '../../../Images/HomePic/red pawn.png';
import dice from '../../../Images/HomePic/dice.png';
import BlurDice from '../../../Images/HomePic/motion dice.png';
import board from '../../../Images/HomePic/ludo board2.png';
import rghtArrow from '../../../Images/HomePic/right arrow.png';
import rghtBrket from '../../../Images/HomePic/right bracket_.png';
// import Bg from '../../../Images/HomePic/bg.png';
const FirstPage = () => {
  return (
    <div className='Top'>
        {/* <img src={Bg} alt='Bg-pic' className='BgPic'/> */}
        <Navbar/>
        <div className='content'>
        <div className='left'>
          <div className='overlap-container'>
          <h1 className='h1-back'>PLAY LUDO CASH  </h1>
          <h1 className='h1-top'>PLAY <span>LUDO CASH</span> </h1>
          <h1 className='h2-back'> WIN REAL CASH EVERYDAY</h1>
        <h1 className='h2-top'>WIN REAL CASH EVERYDAY</h1>
        </div>
        <p>Download and play LUDO CASH online with your friends and win big daily</p>
        <button>
            Get Download link
        </button>
        
        </div>
        <div className='rght'>
        <img src={leftArrow} alt='Arrow'  className='lftArrow'/>
        <img src={leftArrow} alt='Arrow'  className='lftArrow'/>
        <img src={leftArrow} alt='Arrow'  className='lftArrow'/>
        <img src={lftBrket} alt='Bracket'  className='lftbrkt'/>
        <div className='BoardContainer '>
        <img src={pawn1} alt='dice' className='Pawn1'/>
        <img src={pawn1} alt='dice' className='Pawn1' style={{ "--i": 1 }} />
        <img src={pawn1Motion} alt='dice' className='Pawn1' style={{ "--i": 3 }} />
      
         <img src={dice} alt='dice' className='Dice'/>
         <img src={BlurDice} alt='dice' className='Dice'  />
         <img src={dice} alt='dice' className='Dice'  />
         {/* <img src={BlurDice} alt='dice' className='Dice1' /> */}
        <img src={board} alt='boardPic' className='Board'/>
        
        <img src={pawn2Motion} alt='dice' className='Pawn2'  />
        <img src={pawn2} alt='dice' className='Pawn3' style={{ "--i": 1 }} />
        <img src={pawn2} alt='dice' className='Pawn2'style={{ "--i": 3 }}/>
        </div>
        <img src={rghtBrket} alt='Bracket'  className='rghtbrkt'/>
        <img src={rghtArrow} alt='Arrow'  className='rightArrow1'/>
        <img src={rghtArrow} alt='Arrow'  className='rightArrow2'/>
        <img src={rghtArrow} alt='Arrow'  className='rightArrow3'/>
        </div>
        </div>
    </div>
  )
}

export default FirstPage