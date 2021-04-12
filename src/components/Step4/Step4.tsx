import React, { FC } from "react";

import "./step4.scss";

import backgroundImage from "../../img/images/Base.png";

import logo from "../../img/images/Logo_RIMAC.png";

import dad from "../../img/images/Dad.png";
import kid from "../../img/images/Kid.png";
import mom from "../../img/images/Mom.png";
import frame from "../../img/images/Frame.png";
import plant from "../../img/images/Plant.png";
import shadow from "../../img/images/Shadow.png";
import shadow2 from "../../img/images/Shadow2.png";
import beard from "../../img/images/barba.png";

import { useHistory } from "react-router-dom";

interface TitleProps {
  title: string;
}

const Step4: FC<TitleProps> = ({ title }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <main className="main-margin-step3">
      <div className="container-step3">
        <div className="row row-container-step3">
          <img src={frame} alt="Cuadro" className="image-frame-step3" />

          <img src={plant} alt="Planta" className="image-plant-step3" />

          <img src={dad} alt="Padre" className="image-left-step3" />

          <img src={kid} alt="Hijo" className="image-center-step3" />

          <img src={mom} alt="Madre" className="image-right-step3" />

          <img src={shadow} alt="Shadow" className="image-shadow-step3" />

          <img src={shadow2} alt="Shadow" className="image-shadow2-step3" />

          <div className="col-sm-4 col-md-4 options-step3">
            <div className="logo-container-step3">
              <img src={logo} alt="Logo" />
            </div>
          </div>

          <div className="col-sm-12 col-md-8 container-left-step3">
            <div className="logo-container-extra-step3">
              <img src={logo} alt="Logo" />
            </div>

            <div className="formulary-container-step3">
              <div className="image-beard">
                <img src={beard} alt="Cuadro" className="image-beard-step4" />
              </div>

              <hr />

              <div className="message-step4">
                <label className="formulary-title-step4">
                  Gracias por{" "}
                  <label className="formulary-title-part-step4">
                    confiar en nosotros!
                  </label>
                </label>

                <label className="message-step4-label">
                  Queremos conocer mejor la salud de los asegurados. Un asesor
                  se pondrá en contacto contigo en las siguientes 48 horas.
                </label>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg formulary-bottom"
                  onClick={() => history.push("/")}
                >
                  IR A SALUDAR A RIMAC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Step4;
