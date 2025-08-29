import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(false);

  const handleMenuItemClick = (itemId) => {
    setActiveSection(itemId);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="bg-transparent">
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
        <ul className="md:flex space-x-8 text-gray-300">
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
      </div>
    </nav>
  );
};

export default Navbar;
