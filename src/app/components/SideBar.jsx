import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <div className="w-1/3 bg-gray-200 p-4">
      {children}
    </div>
  );
};

export default Sidebar;
