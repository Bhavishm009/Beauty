import React, { useRef,useState } from "react";
import style from "./Contact.module.css";
import { useSpring, animated } from "react-spring";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
function ContactUs() {
  const[email,setEmail]=useState('')
  const[name,setName]=useState('')
  const[message,setMessage]=useState('')
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
      // alert('submitted Succesfully')
      swal({
        title: "Email Sent Successfully!",
        text: "We Will Get In Touch With You.",
        icon: "success",
        buttons: {
          confirm: {
            text: "Okay",
            value: true,
            visible: true,
            className: style["SweetAlertButton"],
            closeModal: true,
          },
        },
        dangerMode: false,
      }).then((value) => {
        if (value) {
        }
      }); 
      setName('')
      setEmail('')
      setMessage('')
  };
  return (
    <>
      <div id="contact" className={style.ContactContainer}>
        <div className={style.Contact}>
          <animated.div className="intro" style={introAnimation}>
            <h1>Get In touch</h1>
            <p>Leave us a message</p>
            <form ref={form} onSubmit={sendEmail}>
              {/* <label>Name</label> */}
              <input required
                placeholder=" Enter Your Name"
                className={style.input}
                type="text"
                name="user_name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              {/* <label>Email</label> */}
              <input
              required
                placeholder="Enter Your Email"
                className={style.input}
                type="email"
                name="user_email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              {/* <label>Message</label> */}
              <textarea
              required
                placeholder="Write your Message here"
                className={style.input}
                name="message"
                col='6'
                row='6'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />
              <button type="submit" value="Send" className={style.btn} >Send</button>
            </form>
          </animated.div>
        </div>
        <div className={style.MapContainer}>
          <iframe
            src="https://maps.google.com/maps?q=adilabaad&t=&z=10&ie=UTF8&iwloc=&output=embed"
            className={style.Map}
            style={{ border: "0" }}
            title="location"
            loading="lazy"
          ></iframe>
        </div>
      </div>
     
    </>
  );
}

export default ContactUs;
