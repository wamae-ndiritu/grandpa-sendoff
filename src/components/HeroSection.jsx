import { useEffect } from "react";
import confetti from "canvas-confetti";
import gukaPotrait from "../assets/guka.jpeg";
import sendOffBanner from "../assets/send-off-banner.png";
import doveImage from "../assets/dove.png";

const HeroSection = () => {
  useEffect(() => {
    // Trigger continuous confetti
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 3000); // Adjust the interval to control the frequency of confetti bursts

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

    // Cleanup interval on component unmount
    return () => {
      clearInterval(confettiInterval);
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
        {/* Portrait Image */}
        <img
          src={gukaPotrait}
          alt='Isaac Ngaruiku Matu'
          className='absolute -bottom-20 md:-bottom-32 left-1/2 transform -translate-x-1/2 rounded-full w-40 h-40 md:w-60 md:h-60 object-cover border-4 border-creamWhite'
        />
      </div>
      <div className='container mx-auto font-serif mt-[70px] md:mt-32'>
        <h2 className='text-4xl font-semibold italic mt-4 text-darkBlue'>
          Celebrating the life of Isaac Ngaruiku Matu
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
      <div>
        {/* Here I want us to have a moving text - the text should be moving horizontally showing the number of years our GrandFather has lived: 96 years of age... We're Grateful to God */}
      </div>
    </section>
  );
};

export default HeroSection;
