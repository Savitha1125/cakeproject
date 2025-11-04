import React, { useState } from 'react';
import './detailpage.css';

export default function Detail() {
  const [active, setActive] = useState('EXPRESS');

  const menuItems = [
    'EXPRESS',
    'CAKES',
    'FLOWERS',
    'PLANTS',
    'GIFTS',
    'PERSONALIZED GIFTS',
    'CHOCOLATES',
  ];

  return (
    <div className="detailpage">
      <div className="menu-container">
        {menuItems.map((item) => (
          <div
            key={item}
            className={`menu-item ${active === item ? 'active' : ''}`}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

