import React from 'react'
import  logo from '../img/logo.png'
import './css/footer.css'
const Footer = () => {
  return (
    <div className='footerContainer' >
        <div className="footerLeftContainer">
            <div className="footerLogo">
                <img src={logo} alt="" />
            </div>
            <p>	&#169;   ZaidMovies</p>
        </div>
        <div className="footerCenterContainer">
                <p>HDToday is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from HDToday and watch it later if you want.</p>
                <div className="footerLinks">
                    <ul>
                        <li>
                            <a href="/">Home</a> <span>-</span>
                            <a href="/term-of-services">Term of services</a><span>-</span>
                            <a href="/contact">Contact</a><span>-</span>
                            <a href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
        </div>
        <div className="footerRightContainer">
             <div className="footerBoxText">
             HDToday does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
             </div>
        </div>
    </div>
  )
}

export default Footer