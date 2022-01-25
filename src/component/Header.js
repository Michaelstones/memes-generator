import React from "react";
import Image from '../images/troll-face.png'

const Header =()=>{
    return (
    <>
        <div className="container">
            <nav className="content">
                <img src={Image} className="logo" alt="img"/>
                <h2 className="title">Meme Generator</h2>
                <h4 className="project">React course -project3</h4>
            </nav>
        </div>
    </>)
}

export default Header;