import React, { FC, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  BrowserRouter,
} from "react-router-dom";

//import styles from "./step1.scss";

//import './App.scss';

import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";

import backgroundImage from "../../img/images/Base.png";

import logo from "../../img/images/Logo_RIMAC.png";

import dad from "../../img/images/Dad.png";
import kid from "../../img/images/Kid.png";
import mom from "../../img/images/Mom.png";
import frame from "../../img/images/Frame.png";
import plant from "../../img/images/Plant.png";
import shadow from "../../img/images/Shadow.png";
import shadow2 from "../../img/images/Shadow2.png";

import buy from "../../img/icons/ic_shield.png";
import quotes from "../../img/icons/llamada-de-telefono-inteligente.png";

import coverage from "../../img/icons/ic_money.png";

import clinics from "../../img/icons/ic_clinic.png";

import calendar from "../../img/icons/Vector2.png";

//import styles2 from 'uno.module.scss';

//import './copy-sccs.scss'
import "./step1.scss";

interface TitleProps {
  title: string;
}

const Step1: FC<TitleProps> = ({ title }) => {
  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        let response = await fetch("https://randomuser.me/api");
        let json = await response.json();
        console.warn("json RESPONSE", json);
        return json;
      } catch (error) {
        console.error(error);
      }
    };

    getDataFromApi();
  }, []);

  let history = useHistory();

  return (
    <main>
      <div className="container">
        <div className="row row-container">
          <img src={frame} alt="Cuadro" className="image-frame" />

          <img src={plant} alt="Planta" className="image-plant" />

          <img src={dad} alt="Padre" className="image-left" />

          <img src={kid} alt="Hijo" className="image-center" />

          <img src={mom} alt="Madre" className="image-right" />

          <img src={shadow} alt="Shadow" className="image-shadow" />

          <img src={shadow2} alt="Shadow" className="image-shadow2" />

          <div className="col-sm-8 col-md-8 options">
            <div className="logo-container">
              <img src={logo} alt="Logo" />
            </div>

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
            <div className="lis-first-option">
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
          </div>
          <div className="col-sm-4 ">
            <div className="formulary-container">
              <div className="col formulary-header">
                <label className="formulary-title">
                  Obtén tu{" "}
                  <label className="formulary-title-part">seguro ahora</label>
                </label>
                <br />
                <label className="formulary-subtitle">
                  Ingresa los datos para comenzar
                </label>
              </div>

              <div className="input-group mb-3 formulary-input-large">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
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

              <div className="form-floating">
                <input
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Fecha de nacimiento"
                />
                <label>Fecha de nacimiento</label>
                <span className="input-group-addon formulary-calendar">
                  <img className="list-image" src={calendar} alt="things"></img>{" "}
                </span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="987654321"
                />
                <label>Celular</label>
              </div>

              <div className="formulary-check-container">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">
                    Acepto la Política de Protección de Datos Personales y los
                    Términos y Condiciones.
                  </label>
                </div>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label className="form-check-label">
                    Acepto la Política de Envío de Comunicaciones Comerciales.
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg formulary-bottom"
                onClick={() => history.push("/step2")}
              >
                COMENCEMOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Step1;
