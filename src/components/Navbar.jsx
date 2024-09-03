import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-darkBlue text-creamWhite py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl sm:text-3xl font-bold'>
          In Memory of Isaac Ngaruiku Matu
        </h1>
        <div className='sm:hidden'>
          <button
            onClick={toggleMenu}
            className='text-creamWhite focus:outline-none'
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row items-center mt-4 sm:mt-0 w-full sm:w-auto`}
        >
          <a href='#biography' className='mx-4 hover:text-lightBlue'>
            Biography
          </a>
          <a href='#tributes' className='mx-4 hover:text-lightBlue'>
            Tributes
          </a>
          <a href='#gallery' className='mx-4 hover:text-lightBlue'>
            Gallery
          </a>
          <a href='#program' className='mx-4 hover:text-lightBlue'>
            Funeral Program
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
