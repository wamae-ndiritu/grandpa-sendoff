import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { FaBookOpen, FaHeart, FaImages } from "react-icons/fa"; // Import icons
import gukaPotrait from "../assets/guka.jpeg";
import sendOffBanner from "../assets/send-off-banner.png";
import doveImage from "../assets/dove.png";

const HeroSection = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Trigger continuous confetti
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 3000);

    // Animate falling dove angels
    const doveContainer = document.getElementById("doveContainer");
    let doveElements = "";
    for (let i = 0; i < 3; i++) {
      doveElements += `<img src="${doveImage}" class="dove-angel" alt="Dove Angel" />`;
    }
    doveContainer.innerHTML = doveElements;

    // Add movement to the doves
    const doves = document.querySelectorAll(".dove-angel");
    doves.forEach((dove, index) => {
      dove.style.left = `${Math.random() * 80 + 10}%`; // Random starting position
      dove.style.animationDelay = `${index * 3}s`;
    });

    // Show buttons when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(confettiInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='w-full pt-4 px-4 pb-10 text-center flex flex-col items-center relative overflow-hidden'>
      <div className='h-40 md:h-64 w-full rounded-lg bg-darkBlue relative'>
        <img
          src={sendOffBanner}
          alt='Send Off'
          className='h-full w-full object-cover rounded-lg'
        />
        <img
          src={gukaPotrait}
          alt='Isaac Ngariuku Matu'
          className='absolute -bottom-20 md:-bottom-32 left-1/2 transform -translate-x-1/2 rounded-full w-40 h-40 md:w-60 md:h-60 object-cover border-4 border-creamWhite'
        />
      </div>
      <div className='container mx-auto font-serif mt-[70px] md:mt-32'>
        <h2 className='text-4xl font-semibold italic mt-4 text-darkBlue'>
          Celebrating the life of Isaac Ngariuku Matu
        </h2>
        <h2 className='text-2xl font-semibold italic mt-4 text-darkBlue'>
          1926 - 2<sup>nd</sup> Sept 2024
        </h2>
        <p className='mt-4 text-2xl text-darkBlue'>
          A life well lived, full of love and wisdom.
        </p>
      </div>
      <div
        id='doveContainer'
        className='absolute inset-0 pointer-events-none'
      ></div>
      <div className='w-full overflow-hidden mt-8'>
        <p className='moving-text text-3xl font-bold text-darkBlue whitespace-nowrap'>
          98 years of age! We're grateful to God the Almighty.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div
        className={`fixed bottom-10 z-[99] w-full px-4 flex justify-around md:justify-center md:space-x-4 transition-opacity duration-500 ${
          showButtons ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='relative group'>
          <a
            href='#eulogy'
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#eulogy").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className='flex justify-center items-center w-12 h-12 bg-darkBlue bg-opacity-80 text-creamWhite p-2 rounded-full cursor-pointer hover:bg-darkBlue-light transition duration-300'
          >
            <FaBookOpen className='text-2xl' />
          </a>
        </div>
        <div className='relative group'>
          <a
            href='#tributes'
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#tributes").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className='flex justify-center items-center w-12 h-12 bg-darkBlue bg-opacity-80 text-creamWhite p-2 rounded-full cursor-pointer hover:bg-darkBlue-light transition duration-300'
          >
            <FaHeart className='text-2xl' />
          </a>
        </div>
        <div className='relative group'>
          <a
            href='#memories'
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#memories").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className='flex justify-center items-center w-12 h-12 bg-darkBlue bg-opacity-80 text-creamWhite p-2 rounded-full cursor-pointer hover:bg-darkBlue-light transition duration-300'
          >
            <FaImages className='text-2xl' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
