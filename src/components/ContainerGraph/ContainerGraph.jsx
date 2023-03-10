import React from "react";

import "./ContainerGraph.scss";

const Container = ({ labels, values, graph }) => {
  //titile and number = type string
  const displayLigne = (title, number) => {
    return (
      <div className="container-sectionRight-array-item">
        <div className="container-sectionRight-array-item-category">
          {title}
        </div>
        <div className="container-sectionRight-array-item-value">{number}</div>
      </div>
    );
  };

  return (
    <div className="Main-container">
      <div className="container">
        <section className="container-sectionLeft">{graph}</section>

        <section className="container-sectionRight">
          <div className="container-sectionRight-array">
            {labels?.map((label, index) => {
              return (
                <React.Fragment key={index}>
                  {displayLigne(label, values[index])}
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Container;
