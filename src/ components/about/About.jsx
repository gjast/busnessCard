// import React from "react";
// import "./About.scss";
// import CardAbout from "./CardAbout";
// export default function About() {
//   const aboutCards = [
//     {
//       id: 1,
//       title: "Website based on layout",
//       img: "./img/frontImg.png",
// 	  href: "#",
// 	  price: "from $20",
//     },
//     {
//       id: 2,
//       title: "Lending",
//       img: "./img/len1img.png",
// 	  href: "#",
// 	  price: "from $5",
//     },
//     {
//       id: 3,
//       title: "Copirate",
//       img: "./img/len2img.png",
// 	  href: "#",
// 	  price: "from $10",
//     },
//     {
//       id: 4,
//       title: "Editing/Correction",
//       img: "",
// 	  href: "#",
// 	  price: "from $10-$30",
//     },
//   ];

//   return (
//     <div className="Main_about_block">
//       {aboutCards.map((card) => (
// 		<CardAbout key={card.id} link={card.href} title={card.title} img={card.img} price={card.price} />
// 	  ))}
//     </div>
//   );
// }

import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.scss";
import CardAbout from "./CardAbout";

export default function About() {
  const aboutCards = [
    {
      id: 1,
      title: "Website based on layout",
      img: "./img/frontImg.png",
      href: "#",
      price: "from $20",
    },
    {
      id: 2,
      title: "Lending",
      img: "./img/len1img.png",
      href: "#",
      price: "from $5",
    },
    {
      id: 3,
      title: "Copirate",
      img: "./img/len2img.png",
      href: "#",
      price: "from $10",
    },
    {
      id: 4,
      title: "Editing/ Correction",
      img: "./img/errorImg.png",
      href: "#",
      price: "from $10-$30",
    },
  ];

  return (
    <div className="Main_about_block">
      {aboutCards.map((card) => {
        const { ref, inView } = useInView({
          threshold: 0.4, 
        });

        return (
          <div
            key={card.id}
            ref={ref}
            className={`card ${inView ? "show" : "hidden"} ${card.id % 2 === 0 ? "card-right" : "card-left"}`}
           
          >
            <CardAbout link={card.href} title={card.title} img={card.img} price={card.price} />
          </div>
        );
      })}
    </div>
  );
}
