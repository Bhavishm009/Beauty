import React from "react";
import style from "./Pricing.module.css";

function Pricing() {
  const PricingList = [
    {
      id: 1,
      name: "Deep Tissue Massage",
      minutes: "60-100 minutes session",
      rupe: "₹ 1200",
      img: "https://images.unsplash.com/photo-1570174006382-148305ce4972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Hot Stone Massage",
      minutes: "60-80 minutes session",
      rupe: "₹ 1500",
      img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "Sweedish Massage",
      minutes: "60-80 minutes session",
      rupe: "₹ 1800",
      img: "https://media.istockphoto.com/id/474945931/photo/woman-having-a-facial-massage.jpg?s=2048x2048&w=is&k=20&c=GoJ3Jx8Dcismg79e8hw3I_GTJqSK6OoFl3qmHTlljAk=",
    },
    {
      id: 4,
      name: "hair cut",
      minutes: "20-40 minutes session",
      rupe: "₹ 1000",
      img: "https://images.unsplash.com/photo-1614609819116-eee9c271a928?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80",
    },
    {
      id: 5,
      name: "Deep Tissue Massage",
      minutes: "15-20 minutes session",
      rupe: "₹ 500",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 6,
      name: "Facial",
      minutes: "20-30 minutes session",
      rupe: "₹ 300",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div id='pricing' className={style.PricingContainer}>
      <h1>Our Pricing</h1>

      <div className={style.gridContainer}>
        {PricingList.map((x) => {
          return (
            <div
              key={x.id}
              id={style.itemOne}
              className={style.gridItem}
              style={{
                background: `linear-gradient(to right,
            rgb(0 0 0 / 0.5),
            rgb(0 0 0 / 0)),url(${x.img})`,
              }}
            >
              <div className={style.massage}>
                <h1>{x.name}</h1>
                <p>{x.minutes}</p>
              </div>
              <p className={style.money}>{x.rupe}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
