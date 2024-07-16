import React from 'react';

const TabsContent = ({ value, activeValue, children }) => (
  <div className={`tab-pane fade ${value === activeValue ? 'show active' : ''}`}>
    {children}
  </div>
);

export default TabsContent;
