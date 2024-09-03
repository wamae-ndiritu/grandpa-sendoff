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
          10<sup>th</sup> Oct 1928 - 2<sup>nd</sup> Sept 2024
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
          96 years of age! We're grateful to God the Almighty.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div
        className={`fixed bottom-10 w-full px-4 flex justify-around md:justify-center md:space-x-8 transition-opacity duration-500 ${
          showButtons ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='relative group'>
          <div className='flex justify-center items-center w-16 h-16 md:w-auto md:h-auto bg-darkBlue bg-opacity-80 text-creamWhite p-4 rounded-full md:rounded-lg cursor-pointer hover:bg-darkBlue-light transition duration-300'>
            <FaBookOpen className='text-4xl md:text-2xl' />
            <span className='hidden md:inline-block md:ml-2 text-lg font-medium'>
              Funeral Programme
            </span>
          </div>
          <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 text-darkBlue md:hidden'>
            Funeral Programme
          </span>
        </div>
        <div className='relative group'>
          <div className='flex justify-center items-center w-16 h-16 md:w-auto md:h-auto bg-darkBlue bg-opacity-80 text-creamWhite p-4 rounded-full md:rounded-lg cursor-pointer hover:bg-darkBlue-light transition duration-300'>
            <FaHeart className='text-4xl md:text-2xl' />
            <span className='hidden md:inline-block md:ml-2 text-lg font-medium'>
              Tributes
            </span>
          </div>
          <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 text-darkBlue md:hidden'>
            Tributes
          </span>
        </div>
        <div className='relative group'>
          <div className='flex justify-center items-center w-16 h-16 md:w-auto md:h-auto bg-darkBlue bg-opacity-80 text-creamWhite p-4 rounded-full md:rounded-lg cursor-pointer hover:bg-darkBlue-light transition duration-300'>
            <FaImages className='text-4xl md:text-2xl' />
            <span className='hidden md:inline-block md:ml-2 text-lg font-medium'>
              Memories
            </span>
          </div>
          <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 text-darkBlue md:hidden'>
            Memories
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
