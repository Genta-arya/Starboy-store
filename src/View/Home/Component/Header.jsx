import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "typeface-montserrat";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../../../Style/Content.css";
function Header() {
  const imageUrls = [
    "https://cdn1-production-images-kly.akamaized.net/XtQkvTEkRKRiinjemhXODH8wCzk=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3128303/original/025341400_1589454782-parker-burchfield-tvG4WvjgsEY-unsplash.jpg",
    "https://cashbac.com/blog/wp-content/uploads/2020/10/baju-untuk-dirumah.jpg",
    "https://s3.bukalapak.com/uploads/content_attachment/df01aecaa19bd5238040a1b5/w-496/pexels-photo-994517.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  let slider;

  return (
    <div className="relative w-screen overflow-hidden ">
      <Slider ref={(c) => (slider = c)} {...sliderSettings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Slider ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "900px",
                objectFit: "cover",
                filter: "brightness(35%)",
              }}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-70 backdrop-blur-sm backdrop-brightness-90 mb-12 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold mb-4 md:mb-6 lg:mb-8">
          Starboy Store
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-4 md:mb-6 lg:mb-8 text-center pl-5 pr-5">
          Discover Your Unique Style, <span> Now Made Effortless with Us.</span>
        </p>
        

        <ScrollLink
          to="productInfo"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="
          shines bg-primary  block mb-8 text-white bg-black font-semibold py-2 px-4 rounded-full text-lg sm:text-xl hover:bg-secondary transition duration-300 
          transition-transform transform hover:scale-105 hover:z-10 drop-shadow-2xl"
          style={{ cursor: "pointer" }}
        >
          Explore Now
        </ScrollLink>
      </div>
    </div>
  );
}

export default Header;
