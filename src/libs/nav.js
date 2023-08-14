import React from "react";
// import homeLogo from '../assets/circle.svg'


const Navbar = () => {
    return ( 
    <header>
        {/* line complement random... ahhhh... ces designer */}
        <div className="lines"></div>
        <div className="lines-ver"></div>
        <div className="lines-ver-2"></div>

        {/* partie header qui contiendra la barre de navigation */}

    
        <nav id="nav">
            <div className="nav-logo"><h2>BATMAN</h2></div>
            <div className="nav-links">
                <ul>
                    <li><a href="#" className="links-home">HOME</a></li>
                    <li><a href="./game.html" className="links-home">GAME</a></li>
                </ul>
            </div>
        </nav>
    </header>
    );
}
 
export default Navbar;