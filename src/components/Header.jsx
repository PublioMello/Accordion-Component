import React, { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import "./header.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOut = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div>
      <div className="header__list">
        <div className="header__list-left">
          <FaGithub />
          <p>/</p>
          <h2>Resources</h2>
          <p>Why GitHub</p>
          <p>Topics</p>
          <p>Learn</p>
          <p>Events & Webninars</p>
        </div>
        <div className="header__list-right" ref={searchRef}>
          <FaSearch className="search_icon" onClick={() => setOpen(true)} />
          {open && (
            <input
              type="text"
              id="search"
              className="header__list-right-search"
              placeholder="Search..."
            />
          )}
          <button className="search_enterprise">Enterprise trial</button>
          <button className="search_contact">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
