import React, { FC } from "react";

import "./step2.scss";

//import styles from 'dos.module.scss';

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

import buy from "../../img/icons/ic_shield.png";
import quotes from "../../img/icons/llamada-de-telefono-inteligente.png";

import coverage from "../../img/icons/ic_money.png";

import clinics from "../../img/icons/ic_clinic.png";

import calendar from "../../img/icons/Vector2.png";
import { useHistory } from "react-router-dom";

interface TitleProps {
  title: string;
}

const Step2: FC<TitleProps> = ({ title }) => {

  let history = useHistory();

  const handleClick = () => {
    history.push("/step3");
  }

  return (
    <main className="main-margin-step2">
      {/*<h1>{title}</h1>*/}

      <div className="container-step2">
        {/*<img src={dad} alt="Madre" className="image-right" />*/}

        <div className="row row-container-step2">
          <img src={frame} alt="Cuadro" className="image-frame-step2" />

          <img src={plant} alt="Planta" className="image-plant-step2" />

          <img src={dad} alt="Padre" className="image-left-step2" />

          <img src={kid} alt="Hijo" className="image-center-step2" />

          <img src={mom} alt="Madre" className="image-right-step2" />

          <img src={shadow} alt="Shadow" className="image-shadow-step2" />

          <img src={shadow2} alt="Shadow" className="image-shadow2-step2" />

          <div className="col-sm-4 col-md-4 options-step2">
            <div className="logo-container-step2">
              <img src={logo} alt="Logo" />
            </div>

            {/*
            <label className="title">Seguro de Salud</label>
            <div className="list-container">
              <ul>
                <li>
                  {" "}
                  <img className="list-image" src={buy} alt="things"></img>{" "}
                  <label>Cómpralo de manera fácil y rápida </label>
                </li>
                <li>
                  {" "}
                  <img className="list-image" src={buy} alt="things"></img>{" "}
                  <label>Cotiza y compra tu seguro 100% digital</label>{" "}
                </li>
                <li>
                  {" "}
                  <img
                    className="list-image"
                    src={coverage}
                    alt="things"
                  ></img>{" "}
                  <label>Hasta S/.12 millones de cobertura anual</label>
                </li>
                <li>
                  <img className="list-image" src={clinics} alt="things"></img>
                  <label>Más de 300 clínicas en todo el Perú</label>
                </li>
              </ul>
            </div>

            <div className=" lis-first-option">
              <ul>
                <li>
                  {" "}
                  <img className="list-image" src={buy} alt="things"></img>{" "}
                  <label>Cómpralo de manera fácil y rápida </label>
                </li>
              </ul>
              <label className="list-counter">{"<  01 / 04  >"}</label>
            </div>
           

            <footer className="footer-container">
              <small className="footer-label">
                &copy; 2021 RIMAC Seguros y Reseguros
              </small>
            </footer>
           */}
          </div>

          <div className="col-sm-12 col-md-8 container-left-step2">
            <div className="logo-container-extra-step2">
              <img src={logo} alt="Logo" />
            </div>

            <div className="formulary-container-step2">
              <div className="col formulary-header-step2">
                <div className="formulary-counter-step2">
                  <ul>
                    <li className="formulary-item">
                      {" "}
                      <img
                        className="list-image-step2"
                        src={chevron}
                        alt="things"
                      ></img>{" "}
                      <label className="formulary-counter-label-step2">
                        PASO 1{" "}
                        <label className="formulary-counter-label-step2 extra-step2">DE 7 </label>
                      </label>
                    </li>
                  </ul>
                </div>

                <label className="formulary-title-step2">
                  Hola, <label className="formulary-title-part-step2">Luisa</label>
                </label>
                <br />
                <label className="formulary-subtitle-step2">
                  Valida que los datos sean correctos
                </label>
              </div>

              <div className="col formulary-header-step2">
                <label className="formulary-title-step2">
                  Datos personales del titular
                </label>
                <br />
              </div>

              <div className="input-group mb-3 formulary-input-large-step2">
                <button
                  className="btn btn-outline-secondary dropdown-toggle-step2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  DNI
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                />
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="987654321"
                />
                <label>Nombres</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="987654321"
                />
                <label>Apellido Materno</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="987654321"
                />
                <label>Fecha de Nacimiento</label>
              </div>

              <div className="formulary-radio-container-step2">
                <label className="formulary-radio-header-step2">Género</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label formulary-radio-label-step2">
                    Masculino
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label formulary-radio-label-step2">
                    Femenino
                  </label>
                </div>
              </div>

              <div className="formulary-radio-container-step2">
                <label className="formulary-radio-header-step2">
                  ¿A quién vamos a asegurar?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label formulary-radio-label-step2">
                    Solo a mí
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label formulary-radio-label-step2">
                    A mi y ami familia
                  </label>
                </div>
              </div>

              <div className="formulary-radio-container-step2">
                <label className="formulary-radio-header-step2">
                  Datos de los familiares
                </label>

                <table className="table">
                  <tbody>
                    <tr>
                      <td>Conyugue</td>
                      <td>12/12/1980</td>
                      <td>ELIMINAR</td>
                    </tr>
                    <tr>
                      <td>Hijo</td>
                      <td>04/08/1994</td>
                      <td>ELIMINAR</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Larry the Bird</td>
                      <td>ELIMINAR</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg formulary-bottom-step2"
                onClick={() => history.push('/step3')}
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

export default Step2;
