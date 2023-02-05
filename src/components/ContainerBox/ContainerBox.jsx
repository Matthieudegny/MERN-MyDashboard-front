import React from "react";

//style
import "./ContainerBox.scss";

const ContainerBox = ({ children }) => {
  return (
    <div className="container_calculation">
      <div className="borderLine" />
      <div className="childrenWrapper">{children}</div>
    </div>
  );
};

export default ContainerBox;
