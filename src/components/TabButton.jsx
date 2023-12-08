import React from "react";

const TabButton = ({ children, onSelectTab }) => {
  return (
    <div>
      <li>
        <button onClick={onSelectTab}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;
