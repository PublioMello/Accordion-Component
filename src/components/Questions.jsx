import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./questions.css";

const Questions = ({ items = [] }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItems = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-options" onClick={() => toggleItems(index)}>
            <h2 className="accordion-title">{item.title}</h2>
            <div className="accordion-icon">
              {openItems.includes(index) ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          {openItems.includes(index) && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
