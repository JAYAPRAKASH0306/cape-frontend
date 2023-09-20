// Contact.js
import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import axios from "axios";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return; // Stop execution if fields are not filled
      }
      const response = await axios.post(
        "https://portfolio-backend1-ldze.onrender.com/api/v1/portfolio/send",
        
        {
          name,
          email,
          msg,
        }
      );
      console.log("backend is connected");
      // Validation success
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/jayaprakash-k-7b366b1aa/"
                        alt="linkedin"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://github.com/JAYAPRAKASH0306" alt="github">
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
