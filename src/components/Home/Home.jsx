// import Typical from 'react-typical'
import { NavLink } from "react-router-dom";
import "./Home.css";
import IconYoutube from "../Icons/youtube.svg";
import IconLinkedin from "../Icons/linkedin.svg";
import IconGithub from "../Icons/github.svg";
import {Typical} from "./Typical";
import React from "react";

export const Home = () => {
    return (
        <div className="home">
            <div className='home-main--header'></div>
            <div className='home-main--container'>
                {/* Tilt effect */}
                <div className='container-des'>
                    <div className="container-img">
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>
                        <span className="t_over"></span>                     
                        <img className="hero-img" src="/imgs/galaxy.jpg" alt="galaxy.jpg" />             
                    </div> 
                </div>
                    <div className="container-description">
                        <p className="heading-paragraph">
                            <Typical/>
                        </p>
                        <div className="headings">
                            <p className="heading2">RADU</p>
                            <p className="heading2">PADURARIU</p>   
                        </div>
                        <p className="heading3">Junior Frontend Developer</p>
                        {/* <div>
                            <div className='aboutMe-description--paragraph'>
                                <p>I'm an enthusiastic and detail-oriented junior Front end Developer. I am a person fascinated by technology, future, AI and space. My passion for informatics came from childhood when I decided to go to Informatics School. I like to create all kind of individual projects with React and Java Script. But the most I like to code and develop my skills every day with a team to share experience with others. My goal is to become a full time Front-End Web-Developer because I like to see immediate results of my work.</p>
                            </div>
                        </div>   */}
                    
                </div>
                
            </div>
            <div>
                <div className="contact-btn-container">
                    <NavLink className= "contact-btn-homepage" to="/download/radupadurariuresume.pdf" target="_blank" >
                        Resume             
                    </NavLink>
                    <NavLink className= "contact-btn-homepage" to="/contact">
                        Contact             
                    </NavLink>
                    {/* <button className= "contact-btn-homepage" to="">
                        About Me ▼            
                    </button> */}
                </div>
            <div className="aboutMe-social">
            
                <a className="icons-container" href="https://linkedin.com/in/radu-padurariu-13688991" target="_blank" rel="noopener noreferrer">
                    <img className="icons-social" height={32} src={IconLinkedin} alt="logo" />             
                </a>
               
                <a className="icons-container" href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer" >
                    <img className="icons-social" height={32} src={IconGithub} alt="logo"/>             
                </a>
                <a className="icons-container" href="https://www.youtube.com/channel/UCx8xr9cB-5xIuM1t3VIUTaA" target="_blank" rel="noopener noreferrer">
                    <img className="icons-social" height={32} src={IconYoutube} alt="logo" />             
                </a>
            </div>
            </div>
            
            
        </div>
    );
}