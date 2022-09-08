import React, { useState } from "react";
import { ProjectItems } from "../ProjectCard/ProjectItems";
import "./ProjectSlideShow.css";

export default function ProjectSlideShow({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div className="project-container">
          {ProjectItems.map((slide, index) => {
            return (
              <div
                className={
                  index === current ? "each-slide right-slide" : "each-slide"
                }
                key={index}
              >
                {index === current && (
                  <div className="img-container">
                    <img className="main-project-img" src={slide.img} alt="project demo" />
                  </div>
                )}
              </div>
            );
          })}

        <button id="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button id="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </>
  );
}
