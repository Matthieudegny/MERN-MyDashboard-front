import React, { useState, useContext } from "react";

//import context
import { DashBoardContext } from "../../Context/Context";

//import composant
import ContainerBox from "../../components/ContainerBox/ContainerBox";

//style
import "./Calculation.scss";

const Calculation = () => {
  const { displayInfoMessage } = useContext(DashBoardContext);
  const [capital, setCapital] = useState(0);
  const [risk, setRisk] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);
  const [positionSize, setPositionSize] = useState(0);

  const calculPosition = () => {
    if (!capital || !risk || !buyPrice || !stopLoss) {
      displayInfoMessage(" Vous devez remplir toutes les cases", "#333A56");
    } else {
      if (capital == 0 || risk == 0 || buyPrice == 0 || stopLoss == 0) {
        displayInfoMessage(" Il ne peut pas avoir de valeur à 0", "#333A56");
      } else {
        if (buyPrice === stopLoss) {
          displayInfoMessage(
            " Votre prix d'achat doit être différent de votre prix de stop loss",
            "#333A56"
          );
        } else {
          if (risk > 100) {
            displayInfoMessage(
              " Votre risque ne peut être supérieur à 100% de votre capital",
              "#333A56"
            );
          } else {
            let result = (capital * (risk / 100)) / (buyPrice - stopLoss);
            console.log("result", result);
            if (result < 0) result = result * -1;
            result = result.toFixed(2);
            setPositionSize(result);
          }
        }
      }
    }
  };

  return (
    <ContainerBox>
      <h2>Calcul de position</h2>
      <div className="section_container_top">
        <section className="container_calculation_sectionTop">
          <div className="container_calculation_sectionTop_container">
            <label>Votre capital:</label>
            <div className="container_calculation_sectionTop_container_inputContainer">
              <input
                className="container_calculation_sectionTop_container_inputContainer_input"
                type="number"
                value={capital || ""}
                onChange={(e) => setCapital(e.target.value)}
              />
              <span className="focus-border">
                <i></i>
              </span>
            </div>
          </div>

          <div className="container_calculation_sectionTop_container">
            <label>Risque en %:</label>
            <div className="container_calculation_sectionTop_container_inputContainer">
              <input
                className="container_calculation_sectionTop_container_inputContainer_input"
                type="number"
                value={risk || ""}
                onChange={(e) => setRisk(e.target.value)}
              />
              <span className="focus-border">
                <i></i>
              </span>
            </div>
          </div>
        </section>

        <section className="container_calculation_sectionTop">
          <div className="container_calculation_sectionTop_container">
            <label>Prix d'achat:</label>
            <div className="container_calculation_sectionTop_container_inputContainer">
              <input
                className="container_calculation_sectionTop_container_inputContainer_input"
                type="number"
                value={buyPrice || ""}
                onChange={(e) => setBuyPrice(e.target.value)}
              />
              <span className="focus-border">
                <i></i>
              </span>
            </div>
          </div>
          <div className="container_calculation_sectionTop_container">
            <label>Stop Loss:</label>
            <div className="container_calculation_sectionTop_container_inputContainer">
              <input
                className="container_calculation_sectionTop_container_inputContainer_input"
                type="number"
                value={stopLoss || ""}
                onChange={(e) => setStopLoss(e.target.value)}
              />
              <span className="focus-border">
                <i></i>
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className="container_calculation_sectionBottom">
        <div className="container_calculation_sectionBottom_container">
          Taille du lot : {positionSize}
        </div>

        <button onClick={calculPosition}>Calcul</button>
      </section>
    </ContainerBox>
  );
};

export default Calculation;
