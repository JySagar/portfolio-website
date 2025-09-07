import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  // Below useState is for when in mobile version clicked on a menu item then the menu will get close i.e. isOpen will become false
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // here setIsOpen is also working like smooth scroll function
  const handleMenuItemClick = (itemId) => {
    setActiveSection(itemId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/*Logo */}
        <div className="text-lg font-semibold curson-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-[#8245ec]">Sagarjyoti</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#8245ec]">Dax</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        {/*Desktop Menu*/}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  onClick={() => {
                    handleMenuItemClick(item.id);
                  }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
        {/* Social Media icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/JySagar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jysagar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] curson-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8345ec] curson-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
        {/* Mobile Menu Items */}
        <div>
          {isOpen && (
            <div className="absolute md:hidden top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
              <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`curson-pointer hover:text-white ${
                      activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}
                  >
                    <button
                      onClick={() => {
                        handleMenuItemClick(item.id);
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/JySagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jysagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
