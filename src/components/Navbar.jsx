import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Canvas } from '@react-three/fiber'; // For future use with Three.js if needed

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  // Function to handle downloading the resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Akash_Tripathi11SEP2024.pdf'; // Path to the resume in the public folder
    link.download = 'Resume-AkashTripathi.pdf';
    link.click();
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
      items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center 
      max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt='logo'
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold
           cursor-pointer flex'>
            Akash &nbsp;
            <span className='sm:block hidden'>| Tripathi</span>
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} 
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                if (link.isDownload) {
                  handleDownloadResume();
                } else {
                  setActive(link.title);
                }
              }}
            >
              {link.isDownload ? (
                <span className="resume-button">{link.title}</span> // Highlighted button
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Nav Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"} 
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    if (link.isDownload) {
                      handleDownloadResume();
                    } else {
                      setToggle(!toggle);
                      setActive(link.title);
                    }
                  }}
                >
                  {link.isDownload ? (
                    <span className="resume-button">{link.title}</span>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
