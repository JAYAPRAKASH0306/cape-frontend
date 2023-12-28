import React from "react";
import "./Projects.css";
import ecomimg from"../../src/assets/ecom-new.png"
// import Portfolio from"../../src/assets/portfolio-fsd.jpg"
import Notesimg from"../../src/assets/notes-app-new.png"

import chat from "../../src/assets/chattify-new.png"
import lms from "../../src/assets/lms.portfolio.png"
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";


const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have done a project which related to Mern Stack 
        </p>
        {/* card design 1*/}
        <div className="row " id="ads" >
          {[
            {img:ecomimg, title: "Ecommerce Shopping Website", badges: ["Node", "Express", "React", "Mongodb","Redux","Stripe"],desc:"An e-commerce website can be developed using the MERN stack, which stands for MongoDB, Express, React, and Node.js. Redux can be used for global state management, and Stripe API can be used for payment processing. ",git:["https://github.com/JAYAPRAKASH0306/ecommerce-frontend"],net:["https://onlineshopjp.netlify.app/"]},
            {img:Notesimg, title: "Notes Taking App", badges:["Node", "Express", "React", "Mongodb","Redux"],desc:"A note-taking app can be developed using the MERN stack, which stands for MongoDB, Express, React, and Node.js. Redux can be used for global state management, and Bootstrap can be used as a front-end framework. This app allows users to create, update, and delete notes, as well as view notes created by others.",git:["https://github.com/JAYAPRAKASH0306/mynotesapp-frontend"],net:["https://notesapp-fsd.netlify.app/"]},
            {img:lms, title: "Library Management System", badges: ["Node", "Express", "React", "Mongodb"],desc:"A library management app can be developed using the MERN stack, which stands for MongoDB, Express, React, and Node.js. It is a full-stack library management application that uses React, Redux, MongoDB, Node.js, ExpressJS, and JWT authentication. ",git:["https://github.com/JAYAPRAKASH0306/my-library-managementapp"],net:["https://library-management-systemformic.netlify.app/"]},
            {img:chat, title: "Chattify", badges: ["Node", "Express", "React", "Mongodb","Socket"],desc:"A chat application can be developed using the MERN stack, which stands for MongoDB, Express, React, and Node.js. Redux can be used for global state management, and Socket.IO can be used for real-time communication between the client and server.",git:["https://github.com/JAYAPRAKASH0306/chat-frontend-1"],net:["https://chattifyappfsd.netlify.app/login"]},

          ].map((card, index) => (
            <div className="col-md-5 pb-4" key={index}>
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">{card.title}</span> */}
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {card.badges.map((badge, index,git,net) => (
                    <span className="card-detail-badge" key={index}>{badge}</span>
                  ))}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">{card.title}</h6>
                    <p>{card.desc}</p>
                    <a href={card.git}className="button-link"target="_blank" rel="noopener noreferrer">GitHub<BsGithub color="black" size={30} className="ms-4" /></a>
                    <a href={card.net}className="button-link"target="_blank" rel="noopener noreferrer">Netlify<SiNetlify color="blue" size={30} className="ms-4" />
</a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
