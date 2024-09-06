import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import image1 from "../assets/photos/img-1.jpg";
import image2 from "../assets/photos/img-2.jpeg";
import image3 from "../assets/photos/img-3.jpg";
import image4 from "../assets/photos/img-4.jpg";
import image5 from "../assets/photos/img-5.jpg";
import image6 from "../assets/photos/img-6.jpg";
import image7 from "../assets/photos/img-7.jpg";
import image8 from "../assets/photos/img-8.jpg";
import image9 from "../assets/photos/img-9.jpg";
import image10 from "../assets/photos/img-10.jpeg";
import image11 from "../assets/photos/img-11.jpg";
import image12 from "../assets/photos/img-12.jpeg";
import photo1 from "../assets/photos/1.jpeg";
import photo2 from "../assets/photos/2.jpeg";
import photo3 from "../assets/photos/3.jpeg";
import photo4 from "../assets/photos/4.jpeg";
import photo5 from "../assets/photos/5.jpeg";
import photo6 from "../assets/photos/6.jpeg";
import photo7 from "../assets/photos/7.jpeg";
import photo8 from "../assets/photos/8.jpeg";
import photo9 from "../assets/photos/9.jpeg";
import photo10 from "../assets/photos/10.jpeg";
import photo11 from "../assets/photos/11.jpeg";
import photo12 from "../assets/photos/12.jpeg";
import photo13 from "../assets/photos/13.jpeg";
import photo14 from "../assets/photos/14.jpeg";
import photo15 from "../assets/photos/15.jpeg";
import photo16 from "../assets/photos/16.jpeg";
import photo17 from "../assets/photos/17.jpeg";
import photo18 from "../assets/photos/18.jpeg";
import photo19 from "../assets/photos/19.jpeg";
import photo20 from "../assets/photos/20.jpeg";
import photo21 from "../assets/photos/21.jpeg";
import photo22 from "../assets/photos/22.jpeg";
import photo23 from "../assets/photos/23.jpeg";
import photo24 from "../assets/photos/24.jpeg";
import photo25 from "../assets/photos/25.jpeg";
import photo26 from "../assets/photos/26.jpeg";
import photo27 from "../assets/photos/27.jpeg";
import photo28 from "../assets/photos/28.jpeg";
import photo29 from "../assets/photos/29.jpeg";
import photo30 from "../assets/photos/30.jpeg";
import photo31 from "../assets/photos/31.jpeg";
import photo32 from "../assets/photos/32.jpeg";
import photo33 from "../assets/photos/33.jpeg";
import photo34 from "../assets/photos/34.jpeg";
import photo35 from "../assets/photos/35.jpeg";
import photo36 from "../assets/photos/36.jpeg";
import photo37 from "../assets/photos/37.jpeg";
import photo38 from "../assets/photos/38.jpeg";
import photo39 from "../assets/photos/39.jpeg";
import photo40 from "../assets/photos/40.jpeg";
import photo41 from "../assets/photos/41.jpeg";
import photo42 from "../assets/photos/42.jpeg";
import photo43 from "../assets/photos/43.jpeg";
import photo44 from "../assets/photos/44.jpeg";
import photo45 from "../assets/photos/45.jpeg";

const Memories = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23,
    photo24,
    photo25,
    photo26,
    photo27,
    photo28,
    photo29,
    photo30,
    photo31,
    photo32,
    photo33,
    photo34,
    photo35,
    photo36,
    photo37,
    photo38,
    photo39,
    photo40,
    photo41,
    photo42,
    photo43,
    photo44,
    photo45,
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlider = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='memories-container py-10 px-4' id="memories">
      <h2 className='text-3xl font-bold text-darkBlue text-center mb-8'>
        Memories
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='relative cursor-pointer'
            onClick={() => openSlider(index)}
          >
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              className='w-full h-60 object-cover rounded-md'
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
          <button
            className='absolute top-5 right-5 text-4xl text-white'
            onClick={closeSlider}
          >
            <FaTimes />
          </button>
          <button
            className='absolute left-5 text-4xl text-white'
            onClick={goToPreviousImage}
          >
            <FaArrowLeft />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Memory ${currentIndex + 1}`}
            className='max-w-full max-h-full object-contain'
          />
          <button
            className='absolute right-5 text-4xl text-white'
            onClick={goToNextImage}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Memories;
