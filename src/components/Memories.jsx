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
