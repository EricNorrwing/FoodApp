import React from "react";
import "./Footer.css";
import discord from "../../assets/discordIcon.jpg";
import insta from "../../assets/Instagram_icon.png";
import fb from "../../assets/Facebook_icon.jpg";
import X from "../../assets/X_icon.svg.png"


const Footer=()=>{
    return (
        <div className="footer">
            <div className="footer-section_padding">
                <div className="footer-links">
                    
                    <div className="footer-links_div">
                    <h4>Contact us at:</h4>
                        <a href="/telephonenumber">
                            <p>Tel: 076-13 37 666</p>
                        </a>
                        <a href="/mail">
                            <p>Mail: FlavourFiesta@Foodmail.com</p>
                        </a>
                        <a href="/adress">
                            <p>Adress: Stockholm, Sweden</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Partners</h4>
                        <a href="https://www.sti.se/">
                            <p>STI</p>
                        </a>
                        <a href="https://code.visualstudio.com/">
                            <p>VS-code</p>
                        </a>
                    </div>
                    <div className="footer-links_div">
                        <h4>The site</h4>
                        <a href="/Recipiecreaction">
                            <p>Create you own recipie</p>
                        </a>
                        <a href="/Recipielist">
                            <p>See others recipies</p>
                        </a>
                        <a href="/Aboutus">
                            <p>More info about Flavour Fiesta</p>
                        </a>                       
                    </div>
                    <div className="footer-links_div">
                        <h4>You can also find us on</h4>
                        <div className="icon">
                            <p><img src={discord} alt="Discord icon" className="icon" /></p>
                            <p><img src={insta} alt="Instagram icon" className="icon" /></p>
                            <p><img src={fb} alt="Facebook icon" className="icon" /></p>
                            <p><img src={X} alt="X icon" className="icon" /></p>
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Java23, Group 1, Flavour Fiesta. All rights reserved.
                    </p>
                </div>
                <div className="footer-below-links">
                    <a href="/terms"><div><p>Terms and Conditions</p></div></a>                    
                </div>
            </div>

        </div>
    )
}

export default Footer;