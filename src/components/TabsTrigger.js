import React from 'react';

const TabsTrigger = ({ value, children, active, onClick }) => (
  <li className="nav-item" role="presentation">
    <button 
      className={`nav-link ${active ? 'active' : ''}`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  </li>
);

export default TabsTrigger;
