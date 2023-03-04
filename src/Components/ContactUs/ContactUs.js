import React, { useRef } from "react";
import style from "./Contact.module.css";
import { useSpring, animated } from "react-spring";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactUs() {
  const introAnimation = useSpring({
    from: { opacity: 0, transform: "translatey(-50px)" },
    to: { opacity: 1, transform: "translatex(0)" },
    // delay: ,
    config: { duration: 1500 },
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vcwku8x",
        "template_y7pvcz5",
        form.current,
        "EnJfsoGCndhnKxbZj"
      )
      .then(
        (result) => {
          console.log(result.text);
        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div id="contact" className={style.ContactContainer}>
        <div className={style.Contact}>
          <animated.div className="intro" style={introAnimation}>
            <h1>Get In touch</h1>
            <p>Leave us a message</p>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                placeholder="Name"
                className={style.input}
                type="text"
                name="user_name"
              />
              <label>Email</label>
              <input
                placeholder="Email"
                className={style.input}
                type="email"
                name="user_email"
              />
              <label>Message</label>
              <textarea
                placeholder="Write your Message here"
                className={style.input}
                name="message"
              />
              <input type="submit" value="Send" className={style.btn} />
            </form>
          </animated.div>
        </div>
        <div className={style.MapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11356.474075845408!2d72.99255842186518!3d21.642012379657842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be021643cdf2191%3A0x447f7723901e752f!2sDiamond%20beauty%20zone!5e0!3m2!1sen!2sin!4v1677310190978!5m2!1sen!2sin"
            className={style.Map}
            style={{ border: "0" }}
            title="location"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ContactUs;
