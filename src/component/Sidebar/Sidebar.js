import "./Sidebar.scss"
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import MediaQuery from "react-responsive";

class Sidebar extends Component {
    render() {

        return (
            <div className="nav-bar">
                <div className="logo">
                    <a className='logo-img' href="/"></a>
                    <h2 className='sub-logo'>SKAY</h2>
                </div>
                <MediaQuery maxWidth={1224}>
                <nav className="mobile">
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color="#FFFF" />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color="#FFFF" />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link ' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="#FFFF" />
                    </NavLink>
                </nav>
                </MediaQuery>
                <MediaQuery minWidth={1224}>
                <nav className="desktop">
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color="#FFFF" />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color="#FFFF" />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link ' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color="#FFFF" />
                    </NavLink>
                </nav>
                </MediaQuery>
                <div className="socialicons">
                    <ul>
                        <li>
                            <Tooltip title={<span style={{ fontSize: '15px' }}>See my latest Projects</span>} placement="left" arrow >
                                <a target={'_blank'} rel='noreferrer' href="https://github.com/skaynaruto">
                                    <FontAwesomeIcon icon={faGithub} color="#ffff" />
                                </a>
                            </Tooltip>

                        </li>
                        <li>
                            <Tooltip title={<span style={{ fontSize: '15px' }}>Follow me on linkdin</span>} placement="left" arrow >
                                <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/suresh-kannan-t/">
                                    <FontAwesomeIcon icon={faLinkedin} color="#0a66c2" />
                                </a>
                            </Tooltip>

                        </li>
                        <li>
                            <Tooltip title={<span style={{ fontSize: '15px' }}>follow me on Instagram</span>} placement="left" arrow >
                                <a target={'_blank'} rel='noreferrer' href="https://www.instagram.com/_kannan_sk_/">
                                    <FontAwesomeIcon icon={faInstagram} color="#8a3ab9" />
                                </a>
                            </Tooltip>

                        </li>
                        <li>
                            <Tooltip title={<span style={{ fontSize: '15px' }}>See my latest videos</span>} placement="left" arrow >
                                <a target={'_blank'} rel='noreferrer' href="https://www.twitter.com/sureshk79885015">
                                    <FontAwesomeIcon icon={faYoutube} color="red" />
                                </a>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title={<span style={{ fontSize: '15px' }}>Follow me on twitter</span>} placement="left" arrow
                            ><a target={'_blank'} rel='noreferrer' href="https://www.twitter.com/sureshk79885015">
                                    <FontAwesomeIcon icon={faTwitter} color="#00acee" />
                                </a>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;