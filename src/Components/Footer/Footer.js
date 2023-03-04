
import React from "react";
import style from "./Footer.module.css";
import {InstagramOutlined, FacebookFilled , YoutubeFilled} from '@ant-design/icons'
function CustomFooter() {
  return <footer>
    <div className={style.waves}>
    <div className={style.wave} id={style.wave1}>
      </div>
      <div className={style.wave} id={style.wave2}>
      </div>
      <div className={style.wave} id={style.wave3}>
      </div>
      <div className={style.wave} id={style.wave4}>
      </div>
      </div>
    <ul className={style.socialIcon}>
      <li><a href="https://www.instagram.com/bhavish_muneshwar" target='_blank'>  <InstagramOutlined style={{ fontSize: '32px', color: '#fff' }}/></a></li>
      <li><a  href="https://www.facebook.com/bmuneshwar1" target='_blank'><FacebookFilled  style={{ fontSize: '32px', color: '#fff' }}/></a></li>
      <li><a href="/"><YoutubeFilled   style={{ fontSize: '32px', color: '#fff' }}/></a></li>
    </ul>

    <ul className={style.menu}>
    <li><a >Home</a></li>
    <li><a >Why Us</a></li>  
    <li><a >Service</a></li>  
    <li><a >Pricing</a></li>  
    <li><a>Contact</a></li>  
    </ul>
    <p>
    © 2023 Diamond Beauty Zone | All Rights Reserved
    </p>
  </footer>;
}

export default CustomFooter;
