import "./Projects.css";
import IconGithub from "../Icons/github.svg";
import Arrow from "../Icons/arrow.png"

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <div><span className="my">My</span> Projects</div>
                <div className="projects-note"><em><strong>NOTE:</strong>  Some websites that required backend are deployed on Heroku App in sleep mode. Please wait few seconds until they open. </em></div>     
            </div>
            <div className="projects-container">

                {/* React */}
                <div className="projects-myProjects">
                    <div className="projects-image--container"> 
                        <img className="projects-image" src="../imgs/responsive.png" alt="pic" />      
                        <a href="https://responsivetemplates.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">
                            <img className="icons-project" height={50} src={Arrow} alt="logo" />    
                        </a>              
                    </div>
                    <div className="projects-title">
                        <div className="project-name"> Responsive <span className="project-name--color">Templates</span></div>
                        <div className="project-language" style={{color:"#1affa3"}}>
                            <span className="projects-multipleLanguages" style={{color:"#ff9180"}}>HTML</span>
                            <span className="projects-multipleLanguages" style={{color:"#809fff"}}>CSS</span>
                            <span className="projects-multipleLanguages" style={{color:"#1affa3"}}>React</span>
                        </div>     
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description">Various responsive templates, builded in a single website, created with HTML, CSS and React.</div>
                        <a className="github-link-container" href="https://github.com/RaduPadurariu/responsivetemplates" target="_blank" rel="noopener noreferrer">
                            <div className="github-link-image"><img className="github-icon" height={50} src={IconGithub} alt="logo" /> </div>
                            <div className="github-link-title">Github</div>
                        </a>
                    </div>   
                </div>
                
                {/* Java script */}
                <div className="projects-myProjects">
                    <div className="projects-image--container"> 
                        <img className="projects-image" src="../imgs/miniapps.png" alt="pic" />      
                        <a href="https://jsminiapps.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project-link">
                            <img className="icons-project" height={50} src={Arrow} alt="logo" />    
                        </a>              
                    </div>
                    <div className="projects-title">
                        <div className="project-name"> Mini <span className="project-name--color">apps</span></div>
                        <div className="project-language" style={{color:"#ffdb4d"}}>java script</div>     
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description">Mini apps and games where I experiment and explore different Java Script implementations. </div>
                        <a className="github-link-container" href="https://github.com/RaduPadurariu/jsminiapps" target="_blank" rel="noopener noreferrer">
                            <div className="github-link-image"><img className="github-icon" height={50} src={IconGithub} alt="logo" /> </div>
                            <div className="github-link-title">Github</div>
                        </a>
                    </div>   
                </div>
                
                {/* Typescript */}
                <div className="projects-myProjects">
                    <div className="projects-image--container"> 
                        <img className="projects-image" src="../imgs/ts.jpg" alt="pic" />      
                        <a href="https://tssimpleapps.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">
                            <img className="icons-project" height={50} src={Arrow} alt="logo" />    
                        </a>              
                    </div>
                    <div className="projects-title">
                        <div className="project-name"> Simple <span className="project-name--color">tools</span></div>
                        <div className="project-language" style={{color:"#80bfff"}}>type script</div>     
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description">Simple applications, most of them tools, where I improve my knowledge in Type Script.  </div>
                        <a className="github-link-container" href="https://github.com/RaduPadurariu/tssimpleapps" target="_blank" rel="noopener noreferrer">
                            <div className="github-link-image"><img className="github-icon" height={50} src={IconGithub} alt="logo" /> </div>
                            <div className="github-link-title">Github</div>
                        </a>
                    </div>   
                </div>

                {/* Pesonal */}

                <div className="projects-myProjects">
                    <div className="projects-image--container"> 
                        <img className="projects-image" src="../imgs/personal.png" alt="pic" />      
                        <a href="https://aquilascollection.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">
                            <img className="icons-project" height={50} src={Arrow} alt="logo" />    
                        </a>              
                    </div>
                    <div className="projects-title">
                        <div className="project-name"> Personal <span className="project-name--color">Projects</span></div>
                        <div className="project-language" style={{color:"#ffdb4d"}}>FRONTEND</div>     
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description">Free live projects, created for different communities, where I try to implement unique and original Frontend requests.   </div>
                        <a className="github-link-container" href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer">
                            <div className="github-link-image"><img className="github-icon" height={50} src={IconGithub} alt="logo" /> </div>
                            <div className="github-link-title">Github</div>
                        </a>
                    </div>   
                </div>


                {/* Mern */}
                <div className="projects-myProjects">
                    <div className="projects-image--container"> 
                        <img className="projects-image" src="../imgs/database.png" alt="pic" />      
                        <a href="https://tavernofheroes.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project-link">
                            <img className="icons-project" height={50} src={Arrow} alt="logo" />    
                        </a>              
                    </div>
                    <div className="projects-title">
                        <div className="project-name"> Database<span className="project-name--color"> Applications</span></div>
                        <div className="project-language" style={{color:"#dddddd"}}>M.E.R.N.</div>     
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description"> Applications created with M.E.R.N., where user data is saved in MongoDB (includes real register and login functionalities).    </div>
                        <a className="github-link-container" href="https://github.com/RaduPadurariu/TavernOfHeroes" target="_blank" rel="noopener noreferrer">
                            <div className="github-link-image"><img className="github-icon" height={50} src={IconGithub} alt="logo" /> </div>
                            <div className="github-link-title">Github</div>
                        </a> 
                    </div>   
                </div>

                {/* Complex Projects */}

                <div className="projects-myProjects">
                    <div className="projects-image--container"> 
                        <img className="projects-image" src="../imgs/complex.png" alt="pic" />      
                        <a href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer" className="project-link">
                            <img className="icons-project" height={50} src={IconGithub} alt="logo" />    
                        </a>              
                    </div>
                    <div className="projects-title">
                        <div className="project-name"> Complex <span className="project-name--color">Projects</span></div>
                        <div className="project-language" >
                            <span className="projects-multipleLanguages" style={{color:"#80bfff"}}>Type Script</span>
                            <span className="projects-multipleLanguages" style={{color:"#1affa3"}}>React</span>
                            <span className="projects-multipleLanguages" style={{color:"#ff99bb"}}>Sass</span>
                            <span className="projects-multipleLanguages" style={{color:"#aa80ff"}}>PHP</span>
                        </div>     
                    </div>
                    <div className="projects-description-container">
                        <div className="projects-description">  More complex and advance applications with React that require API calls or backend knowledge. (Fullstack projects).    </div>
                        <a className="github-link-container" href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer">
                            <div className="github-link-image"><img className="github-icon" height={50} src={IconGithub} alt="logo" /> </div>
                            <div className="github-link-title">Github</div>
                        </a>  
                    </div>   
                </div>
{/* 
                <a href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--proportions">
                            <div className="eyes"></div>
                            <img className="projects-image--idealMan" src="../imgs/idealman.jpg" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Ideal man <span className="project-title--color3">Proportions</span>
                    </div>
                    <div className="projects-description">
                        (in progress... ) This website is an application to monitor your muscle measurements comparing with ideal ones proposed by the ancient greeks, only using your wrist and knee measurements. The project will be made with MERN, Sas and TypeScript and can be found on my Github account.
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={IconGithub} alt="logo" />
                    </div>
                </a>

                <a href="https://jsminiapps.herokuapp.com" target="_blank" className="projects-myProjects" rel="noopener noreferrer">
                    <div className="projects-image--container">
                        <div className="projects-image--planetary">

                        </div>
                    </div>
                    <div className="projects-title">
                        Mini <span className="project-title--color1">Apps</span>
                    </div>
                    <div className="projects-description">
                        This website contain mini apps created only with Java Script with the knowledge from the Web Development course. They are homeworks and workshops we study at the course and I improved and add something extra to each of them to cover everything I learned about HTML, CSS and Java Script (Control Structures, Dom manipulation, Functions and Scopes, AJAX, OOP, ES 6, BOM, etc.)  
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={Arrow} alt="logo" />
                    </div>
                </a> */}




            </div>
        </div>
    )
}