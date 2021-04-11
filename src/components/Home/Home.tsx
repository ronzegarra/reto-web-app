import React, { FC } from "react";

import "./style.scss";

//import './App.scss';

import backgroundImage from "../../img/images/Base.png";

import logo from "../../img/images/Logo_RIMAC.png";

import dad from "../../img/images/Dad.png";
import kid from "../../img/images/Kid.png";
import mom from "../../img/images/Mom.png";

import buy from "../../img/icons/ic_shield.png";
import quotes from "../../img/icons/llamada-de-telefono-inteligente.png";

import coverage from "../../img/icons/ic_money.png";

import clinics from "../../img/icons/ic_clinic.png";

import calendar from "../../img/icons/Vector2.png";

interface TitleProps {
  title: string;
}

const Home: FC<TitleProps> = ({ title }) => {
  return (
    <main>
      {/*<h1>{title}</h1>*/}

      <div className="container">
        {/*<img src={dad} alt="Madre" className="image-right" />*/}

        <div className="row row-container">
          <img src={dad} alt="Padre" className="image-left" />

          <img src={kid} alt="Hijo" className="image-center" />

          <img src={mom} alt="Madre" className="image-right" />
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

            <footer className="footer-container">
              <small className="footer-label">
                &copy; 2021 RIMAC Seguros y Reseguros
              </small>
            </footer>
          </div>
          <div className="col-sm-4 col-md-4">
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

              <button type="button" className="btn btn-primary btn-lg formulary-bottom">
                COMENCEMOS
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
