import React, { FC } from "react";

import "./step3.scss";

//import './App.scss';

import backgroundImage from "../../img/images/Base.png";

import logo from "../../img/images/Logo_RIMAC.png";

import dad from "../../img/images/Dad.png";
import kid from "../../img/images/Kid.png";
import mom from "../../img/images/Mom.png";
import frame from "../../img/images/Frame.png";
import plant from "../../img/images/Plant.png";
import shadow from "../../img/images/Shadow.png";
import shadow2 from "../../img/images/Shadow2.png";

import chevron from "../../img/icons/icon_Back.png";
import basic from "../../img/icons/basic.png";
import heart from "../../img/icons/corazon.png";

import calendar from "../../img/icons/Vector2.png";
import { useHistory } from "react-router-dom";

interface TitleProps {
  title: string;
}

const Step3: FC<TitleProps> = ({ title }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/step3");
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
              <div className="col formulary-header-step3">
                <div className="formulary-counter-step3">
                  <ul>
                    <li>
                      {" "}
                      <img
                        className="list-image"
                        src={chevron}
                        alt="things"
                      ></img>{" "}
                      <label className="formulary-counter-label-step3">
                        PASO 2{" "}
                        <label className="formulary-counter-label extra-step3">
                          DE 7{" "}
                        </label>
                      </label>
                    </li>
                  </ul>
                </div>

                <label className="formulary-title-step3">
                  Elige{" "}
                  <label className="formulary-title-part-step3">
                    tu protección
                  </label>
                </label>
                <br />
                <label className="formulary-subtitle-step3">
                  Selecciona tu plan de salud ideal
                </label>
              </div>

              <div className="row">
                <div className="col-sm-3 ">
                  <div className="option-selected ">
                    <div className="col box-container">
                      <label className="box-description">BASICO</label>
                      <br />
                      <label className="box-time">
                        S/ <label className="box-quantity">160</label>
                      </label>

                      <label className="box-time">mensual</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 ">
                  <div className="option-selected extra-value">
                    <div className="col box-container">
                      <label className="box-description">AVANZADO</label>
                      <br />
                      <label className="box-time">
                        S/ <label className="box-quantity">200</label>
                      </label>

                      <label className="box-time">mensual</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 ">
                  <div className="option-selected extra-value">
                    <div className="col box-container">
                      <label className="box-description">PREMIUN</label>
                      <br />
                      <label className="box-time">
                        S/ <label className="box-quantity">250</label>
                      </label>

                      <label className="box-time">mensual</label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 ">
                  <div className="option-selected extra-value">
                    <div className="col box-container">
                      <label className="box-description">FULL</label>
                      <br />
                      <label className="box-time">
                        S/ <label className="box-quantity">500</label>
                      </label>

                      <label className="box-time">mensual</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="formulary-radio-container">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Tienes(3) asegurados</td>
                      <td></td>
                      <td>RESUMEN de PLAN</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr />

              <div className="formulary-radio-container">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Conyugue</td>
                      <td></td>
                      <td>S/ 40</td>
                    </tr>
                    <tr>
                      <td>Hijo 1</td>
                      <td></td>
                      <td>S/ 60</td>
                    </tr>
                    <tr>
                      <td>Hijo 2</td>
                      <td></td>
                      <td>S/ 60</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <hr className="hr-dotted"></hr>

              <div className="formulary-radio-container">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>PAGO TOTAL</td>
                      <td></td>
                      <td>S/160</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card card-container">
                <h5 className="card-header">Cuentas con estos beneficiarios</h5>
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <div>
                            <label className="card-description">
                              Cobertura
                            </label>
                            <br />
                            <label className="card-coverage">S/1MM</label>
                            <br />
                            <label htmlFor="">Plan Básico</label>
                          </div>
                        </td>
                        <td></td>
                        <td>
                          {" "}
                          <img src={basic} alt="Hijo" className="image-type" />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <hr />
                  <ul>
                    <li>
                      {" "}
                      <img
                        className="list-image-heart"
                        src={heart}
                        alt="things"
                      ></img>{" "}
                      <label className="card-label-like">Lima</label>
                    </li>
                    <li>
                      {" "}
                      <img
                        className="list-image-heart"
                        src={heart}
                        alt="things"
                      ></img>{" "}
                      <label className="card-label-like">+30 clínicas</label>{" "}
                    </li>
                    <li>
                      {" "}
                      <img
                        className="list-image-heart"
                        src={heart}
                        alt="things"
                      ></img>{" "}
                      <label className="card-label-like">
                        Medico a domicilio
                      </label>
                    </li>
                    <li>
                      <img
                        className="list-image-heart"
                        src={heart}
                        alt="things"
                      ></img>
                      <label className="card-label-like">
                        Chequeos preventivos
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg formulary-bottom"
                onClick={() => history.push("/step4")}
              >
                CONTINUAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Step3;
