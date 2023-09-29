import { useState } from "react";
import "./Home/Home.css";
import { Link } from "react-router-dom";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "-50px 12px 0 0",
  cursor: "pointer",
  fontSize: "20px",
  lineHeight: "1.2",
  zIndex: "1000",
  opacity: ".8",
  
};
const activeDotStyle = {
  color: "rgba(0, 206, 93)",
}
const arrowStyle = {
  fontSize: "50px",
  zIndex: "100",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    console.log("left works");
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${slides[currentIndex].backdrop_path})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles} className={arrowStyle}>
        <i className="fa-regular fa-chevron-left"></i>
        </div>
        <div onClick={goToNext} style={rightArrowStyles} className={arrowStyle}>
        <i className="fa-regular fa-chevron-right"></i>
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        <div className="container">
          <div className="slide-caption">
            <h3 className="film-title">
            
                {slides[currentIndex].title ? slides[currentIndex].title : slides[currentIndex].name}
             
            </h3>
            <div className="sc-detail">
              <div className="scd-item">
                IMDB: <strong> {slides[currentIndex].vote_average}</strong>
              </div>
              
            </div>
            <p className="sc-desc">
            {slides[currentIndex].overview}
            </p>
            <Link to={`/home/${slides[currentIndex].id}`} className="btn btn-radius btn-sc-action btn-sc-play"> 
             
                See More <i className="fa-regular fa-arrow-right"></i>
              
              </Link>
          </div>
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
          className="dot"
            // style={dotStyle}
            style={dotStyle}
            key={slideIndex}
            onClick={(e) => {
              goToSlide(slideIndex);
            }}
          >
            {/* - */}
            <i className="fa-solid fa-dash" style={slideIndex == currentIndex ? {...dotStyle, ...activeDotStyle} : dotStyle}></i>
          </div>
        ))}
      </div>
      <div className="darkGradient"></div>
    </div>
  );
};

export default ImageSlider;
