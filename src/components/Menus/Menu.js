import React from 'react';
import './Menu.css';
import { FcAbout, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from 'react-icons/fc';
import { DiTechcrunch } from 'react-icons/di';
import { Link } from 'react-scroll';
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import jpimg from "../../assets/Jayaprakashimg.jpg"

function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className='navbar-profile-pic'>
              <img src={jpimg} alt={jpimg} />
            </div>
          </Zoom>
          <Fade left>
            <div className='nav-items'>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='home' spy={true} smooth={true} duration={100}><FcHome />Home</Link>
                </div>
              </div>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='about' spy={true} smooth={true} duration={100}><FcAbout />About</Link>
                </div>
              </div>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='education' spy={true} smooth={true} duration={100}><FcReadingEbook />Education</Link>
                </div>
              </div>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='techstack' spy={true} smooth={true} duration={100}><DiTechcrunch />Tech Stack</Link>
                </div>
              </div>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='projects' spy={true} smooth={true} duration={100}><FcVideoProjector />Projects</Link>
                </div>
              </div>


              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='work' spy={true} smooth={true} duration={100}><FcPortraitMode />Work</Link>
                </div>
              </div>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to='contact' spy={true} smooth={true} duration={100}><FcBusinessContact />Contact</Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <FcReadingEbook />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <DiTechcrunch />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;