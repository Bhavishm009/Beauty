import React from "react";
import style from "./Hero.module.css";
import { Carousel } from "antd";

function Hero() {
  const imageSlide = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 2,
      img: "https://static.tnn.in/photo/msid-95223288,imgsize-491555,width-100,height-200,resizemode-75/95223288.jpg",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&w=1000&q=80",
    },
  ];
  return (
    <Carousel autoplay dots={false} infinite easing="linear">
      {imageSlide.map((x) => (
        <div key={x.id} className={style.HeroWrapper}>
          <img className={style.heroImage} src={x.img} alt={`Slide ${x.id}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
