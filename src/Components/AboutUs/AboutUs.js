import React from "react";
import style from "./AboutUs.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import CustomButton from "../../Atom/Button/CustomButton";

function AboutUs() {
  return (
    <div id='whyus' className={style.AboutWrapper}>
      <div className={style.AboutContainer}>
        <div className={style.AboutContent}>
          <h2>Why Our Clients Choose Us</h2>
          <p>
            We are the leading beauty salon in Ankleshwar Providing high-quality
            hairdressing, makeup and skin care services to everyone
          </p>
          <ul>
            <li>
              <ArrowRightOutlined />
              <span>Extensions, Smoothing Services & Treatments</span>
            </li>
            <li>
          
              <ArrowRightOutlined /> <span>
                Complete Skin & Hair Solution
              </span>
            </li>
            <li>
          
              <ArrowRightOutlined /> <span>Bridal Makeup, Sider</span>
            </li>
            <li>
              <ArrowRightOutlined />
              <span>Modern salon & Welcoming Energy</span>
            </li>
          </ul>
          <div className={style.Aboutbtn}>
          <CustomButton ButtonText="Read More" className={style.AboutButton} />
          </div>
        </div>
        <div className={style.Aboutimg}>
          <img
            src="https://im.indiatimes.in/content/itimes/photo/2015/Mar/13/1426222667-15-most-beautiful-women-in-the-world_card.jpg?w=414&h=311&cc=1"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
