import React from "react";
import "./Projects.css";
import ecomimg from"../../src/assets/ecom.jpg"
import Portfolio from"../../src/assets/portfolio-fsd.jpg"
import lms from "../../src/assets/Lms.jpg"
import psr from "../../src/assets/password-resetjpg.jpg"
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
            {img:ecomimg, title: "Ecommerce Shopping Website", badges: ["Node", "Express", "React", "Mongodb"],git:["https://github.com/JAYAPRAKASH0306/myreduxecommerceapp"],net:["https://jp-ecommerce-redux.netlify.app/"]},
            {img:Portfolio, title: "Portfolio Website", badges:["Node", "Express", "React", "Mongodb"],git:["https://github.com/JAYAPRAKASH0306/cape-frontend"],net:["https://enchanting-bavarois-ebedb0.netlify.app/"]},
            {img:lms, title: "Learning Management System", badges:["Node", "Express", "React", "Mongodb"],git:["https://github.com/JAYAPRAKASH0306/my-library-managementapp"],net:["https://library-management-systemformic.netlify.app/"]},
            {img:psr, title: "Password Reset System", badges: ["Node", "Express", "React", "Mongodb"],git:["https://github.com/JAYAPRAKASH0306/Reset-password-frontend"],net:["https://delightful-yeot-9bb0f1.netlify.app/"]}
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
                    <a href={card.git}><BsGithub color="black" size={30} className="ms-4" /></a>
                    <a href={card.net}><SiNetlify color="blue" size={30} className="ms-4" />
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
