import '../scss/main.scss';
import Footer from './Footer';
import Header from './Header';
import Content from '../pages/Content';
import {AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
import { useEffect } from 'react';
import $ from "jquery";

function App({children}) {
  useEffect(() => {
    $('.top a').click(function(){
      const navA = $(this).attr('href');
      const posY = $(navA).offset().top;
      const headerT = $('header').innerHeight();
      $('html, body').animate({scrollTop: posY - headerT});
      return false;
    })
    $('.down a').click(function(){
      const navA = $(this).attr('href');
      const posY = $(navA).offset().top;
      const headerT = $('footer').innerHeight();
      $('html, body').animate({scrollTop: posY - headerT});
      return false;
    })
  })
  return (
    <>
    
    <div id='bg'>
            
      
    <div id="wrap">
      
      <Header />

      {children}

      <div id='scroll'>
        <div className='top'>
          <p><a href='#header'><AiOutlineUp /></a></p>
        </div>
        <div className='down'>
          <p><a href='#footer'><AiOutlineDown /></a></p>
        </div>
      </div>

      <Footer />
    </div></div>
    </>
  );
}

export default App;
