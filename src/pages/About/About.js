import React from 'react'
import './About.css'
import Jump from "react-reveal/Jump";



function About() {
  return (
    <>
          <Jump>

     <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"}
                alt={"fsd"}
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am Jayaprakash, a dedicated individual currently pursuing an MBA at Bharathiyar University in Coimbatore. My academic journey has equipped me with a strong foundation in business and management principles, which I continuously strive to apply in my career.

I bring with me 1.5 years of valuable experience as a SAP WMS (Warehouse Management System) professional at Britannia Industries Limited. This experience has honed my skills in optimizing warehouse operations, ensuring efficient inventory management, and contributing to the smooth functioning of a large-scale organization.

In parallel with my professional journey, I am passionately pursuing a Full Stack Developer program at Guvi in Chennai. This intensive program has allowed me to dive deep into the world of web development, gaining expertise in essential technologies such as JavaScript, HTML, and CSS. I specialize in using React.js for frontend development and harnessing the power of Node.js, SQL, MongoDB, and Express.js for building robust backends.

My dedication to learning and my hands-on experience in both business and technology realms make me a versatile and dynamic professional. I am enthusiastic about leveraging my skills and knowledge to create innovative solutions and contribute to meaningful projects.

              </p>
            </div>
          </div>
        </div>
        </Jump>

      </>
  )
}

export default About