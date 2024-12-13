import React, { useEffect, useRef } from "react";
import "./Stack.scss";
import StackBlocks from "./StackBlocks";

export default function Stack() {
  const stack = [
    { id: 1, img: "./img/React.jpeg" },
    { id: 2, img: "./img/Sass.png" },
    { id: 3, img: "./img/Jquery.png" },
    { id: 4, img: "./img/Bootstrap.jpg" },
    { id: 5, img: "./img/zustand.jpeg" },
  ];

  const scrollContainerRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer) {
        const scrollAmount = 2; 
        scrollContainer.scrollLeft += scrollAmount;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; 
        }
      }
    };

    scrollInterval = setInterval(autoScroll, 10); 

    return () => clearInterval(scrollInterval); 
  }, []);

  return (
    <div className="Stack">
      <h1>Stack</h1>
      <div className="Stack_block" ref={scrollContainerRef}>
        {stack.concat(stack).map((item, index) => (
          <StackBlocks key={index} img={item.img} />
        ))}
      </div>
    </div>
  );
}
