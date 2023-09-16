import React, { useEffect, useState, useRef } from "react";
import products from "../../../Model/ProductData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../Style/Content.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function ProductLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);

    setIsModalOpen(true);

    // Gulir ke modal dengan offset
    scroller.scrollTo("productInfo", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 400, // Sesuaikan dengan offset yang Anda butuhkan
    });
  };
  const modalRef = useRef(null);

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="container mx-auto mt-12 bg-gray-200 rounded-full p-8 border-2 pb-16"
      id="productInfo"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-white bg-black w-60 rounded-full p-2 shines">
        Our Products
      </h2>
      {isMobile ? (
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          className="mobile-carousel"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md relative drop-shadow-2xl"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 rounded-md mb-4"
                onClick={() => openModal(product.imageUrl)}
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <ScrollLink
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
                className="bg-gray-700 text-white px-4 py-2 mt-2 rounded-md hover:bg-gray-800 text-center block mb-8"
                style={{ cursor: "pointer" }}
              >
                Order Now
              </ScrollLink>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6`}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white p-4 rounded-lg shadow-md relative drop-shadow-2xl`}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-80 rounded-md mb-4"
                onClick={() => openModal(product.imageUrl)}
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <ScrollLink
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2500}
                className="bg-gray-700 text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800 absolute bottom-4 right-4 animate-none hover:scale-110 transition-all delay-75"
                style={{ cursor: "pointer" }}
              >
                Order Now
              </ScrollLink>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <img
              src={selectedImage}
              alt="Zoomed Image"
              className="max-h-screen max-w-full"
            />
            <button
              className="bg-gray-700 text-white px-4 py-2 mt-5 rounded-full hover:bg-gray-800 absolute top-3 right-8"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} /> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductLayout;
