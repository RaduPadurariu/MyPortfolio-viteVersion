import IconHtml from "../Icons/html.png"
import IconCss from "../Icons/css.png"
import IconJs from "../Icons/javascript.png"
import IconReact from "../Icons/react.png"
import IconTs from "../Icons/typescript.png"
import IconNodejs from "../Icons/nodejs.png"
import IconGit from "../Icons/git.png"
import IconSass from "../Icons/sass.png"
import IconEdabit from "../Icons/edabit_logo.png"
import IconEdabitXp from "../Icons/edabit_xp.png"
import React from 'react';
import { useState} from "react";

import "./Skills.css"

export const Skills = () => {
    const [checkImgClick, setCheckImgClick] = useState(false)
    const zoom = () => {
        setCheckImgClick(!checkImgClick)
    }
    return (
        <div className="skills">
            <div className="skills-container">
                <div className="skills-header">
                    <span className="my">My</span> Knowledge
                </div>
                <div className="knowledge-container">
                    <div className="skills-data-container">
                        <div className="skills-data">
                            <div>
                                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconHtml} alt="no-logo" title="HTML documentation" />             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                html
                            </div>
                        </div>
                        
                        <div className="skills-data">
                            <div>
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconCss} alt="no-logo" title="CSS documentation"/>             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                css
                            </div>
                        </div>

                        <div className="skills-data">
                            <div>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconJs} alt="no-logo" title="Java Script documentation"/>             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                java script
                            </div>
                        </div>

                        <div className="skills-data">
                            <div>
                                <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconTs} alt="no-logo" title="Type Script documentation"/>             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                type script
                            </div>
                        </div>

                        <div className="skills-data">
                            <div>
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconReact} alt="no-logo" title="React documentation"/>           
                                </a>
                            </div>
                            <div className="skills-data--names">
                                react
                            </div>
                        </div>


                    
                        <div className="skills-data">
                            <div>
                                <a href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconNodejs} alt="no-logo" title="NodeJS documentation"/>             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                nodejs
                            </div>
                        </div>


                        <div className="skills-data">
                            <div>
                                <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconGit} alt="no-logo" title="Git documentation"/>             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                git
                            </div>
                        </div>


                        <div className="skills-data">
                            <div>
                                <a href="https://sass-lang.com/documentation/" target="_blank" rel="noopener noreferrer">
                                    <img className="icons" height={50} src={IconSass} alt="no-logo" title="SASS documentation"/>             
                                </a>
                            </div>
                            <div className="skills-data--names">
                                sass
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="skill-experience-container">
                    <div className="skills-edabit-img"><img src={IconEdabit} alt="" width={150} /></div>
                    <div className="skills-edabit-dataContainer">
                        <div className="skills-edabit-data">
                            <h4 className="edabit">edabit platform</h4>
                            <div className="skills-edabit-exp edabit"><p>Level 20</p><p>13,677 XP</p></div>
                            <div className="edabit"><p>skill: intermediate</p></div>
                            <div className="skills-edabit-desc edabit"><p><em>891 different java script</em></p><p>problems solved</p></div>
                        </div>
                        <div className="skills-edabitProof-container">
                            <img onClick={zoom} className={`skills-edabit-proof ${checkImgClick === false ? "" : "zoomIn"}`} src={IconEdabitXp} alt="no-proof" title="Edabit Proof"/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}