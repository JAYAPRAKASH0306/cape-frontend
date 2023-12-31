import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect';
import resume from '../../assets/docs/Resume.pdf'
import { useTheme } from "../../Context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";




function Home() {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
    <div className='container-fluid home-container'id='home'>
    <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
      <div className='container home-content'>
        <Fade right>
        <h2>I'm  Jayaprakash</h2>
        <h1><Typewriter
  options={{
    strings: ['Full Stack Developer !', 'MERN stack Developer !'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
</Fade>
<Fade bottom>
<div className='home-buttons'>
  <a className='btn btn-hire'
  href='https://www.linkedin.com/in/jayaprkashk/'
                rel="noreferrer"
                target="_blank"
>Linkedin</a>
  <a className='btn btn-cv'href="https://drive.google.com/file/d/1ZXqjmpd8PZ-CKVH-TWC6qgShGhQbEfIs/view?usp=sharing"
 alt={resume}download='jp.pdf'target="_blank" rel="noopener noreferrer"> My Resume</a>

</div>
</Fade>
      </div>
    </div>

    </>
  )
}

export default Home