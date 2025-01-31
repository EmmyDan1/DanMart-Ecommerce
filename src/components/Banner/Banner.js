import React, { useState, useEffect } from "react";  
import { Link } from "react-router-dom";  
import Slider from "react-slick";  
import {  
  bannerImgOne,  
  bannerImgTwo,  
  bannerImgThree,
  bannerImgFour,
  bannerImgFive, 
} from "../../assets/images";  
import Image from "../designLayouts/Image";  

const Banner = () => {  
  const [dotActive, setDotActive] = useState(0);  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  

  const handleResize = () => {  
    setWindowWidth(window.innerWidth);  
  };  

  useEffect(() => {  
    window.addEventListener("resize", handleResize);  
    return () => {  
      window.removeEventListener("resize", handleResize);  
    };  
  }, []);  

  const settings = {  
    dots: true,  
    infinite: true,  
    autoplay: true,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    arrows: false,  
    beforeChange: (prev, next) => {  
      setDotActive(next);  
    },  
    appendDots: (dots) => (  
      <div  
        style={{  
          position: "absolute",  
          top: "50%",  
          left: windowWidth < 576 ? "2%" : "7%",  
          transform: "translateY(-50%)",  
        }}  
      >  
        <ul style={{ margin: "0px" }}> {dots} </ul>  
      </div>  
    ),  
    customPaging: (i) => (  
      <div  
        style={  
          i === dotActive  
            ? {  
                width: windowWidth < 576 ? "25px" : "30px",  
                color: "#262626",  
                borderRight: "3px #262626 solid",  
                padding: windowWidth < 576 ? "4px 0" : "8px 0",  
                cursor: "pointer",  
                fontSize: windowWidth < 576 ? "12px" : "16px",  
              }  
            : {  
                width: windowWidth < 576 ? "25px" : "30px",  
                color: "transparent",  
                borderRight: "3px white solid",  
                padding: windowWidth < 576 ? "4px 0" : "8px 0",  
                cursor: "pointer",  
                fontSize: windowWidth < 576 ? "12px" : "16px",  
              }  
        }  
      >  
        0{i + 1}  
      </div>  
    ),  
    responsive: [  
      {  
        breakpoint: 768,  
        settings: {  
          appendDots: (dots) => (  
            <div  
              style={{  
                position: "absolute",  
                top: "50%",  
                left: "2%",  
                transform: "translateY(-50%)",  
              }}  
            >  
              <ul style={{ margin: "0px" }}> {dots} </ul>  
            </div>  
          ),  
          customPaging: (i) => (  
            <div  
              style={  
                i === dotActive  
                  ? {  
                      width: "25px",  
                      color: "#262626",  
                      borderRight: "3px #262626 solid",  
                      cursor: "pointer",  
                      fontSize: "12px",  
                    }  
                  : {  
                      width: "25px",  
                      color: "transparent",  
                      borderRight: "3px white solid",  
                      cursor: "pointer",  
                      fontSize: "12px",  
                    }  
              }  
            >  
              0{i + 1}  
            </div>  
          ),  
        },  
      },  
    ],  
  };  

  return (  
    <div className="w-full bg-[#0b403a]">  
      <Slider {...settings}>  
        <Link to="/offer">  
          <div>  
            <Image imgSrc={bannerImgThree} alt="Banner Image 1" />  
          </div>  
        </Link>  
        <Link to="/offer">  
          <div>  
            <Image imgSrc={bannerImgFive} alt="Banner Image 2" />  
          </div>  
        </Link>  
        <Link to="/offer">  
          <div>  
            <Image imgSrc={bannerImgFour} alt="Banner Image 3" />  
          </div>  
        </Link>  
      </Slider>  
    </div>  
  );  
};  

export default Banner;