import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show button after scrolling down 200px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='relative mt-25'>
      <footer className='text-center py-4 bg-gray-100 mt-8'>
        <p>
          Designed with <span className='text-red-500'>❤️</span> by Grandchild{" "}
          <a
            href='https://github.com/wamae-ndiritu'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            Ndiritu Wamai
          </a>
        </p>
      </footer>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300'
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Footer;
