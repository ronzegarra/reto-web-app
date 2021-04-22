import React, { FC, useEffect, useState } from "react";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

import Chart from "react-apexcharts";

import "./step1.scss";

interface TitleProps {
  title: string;
}

const Step1: FC<TitleProps> = ({ title }) => {
  const [list, setList] = useState([]);
  const [values, setValues] = useState([]);

  const [average, setAverage] = useState("");
  const [desviation, setDesviation] = useState("");

  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [],
    },
  ]);

  useEffect(() => {
    const getClientsFromApi = async () => {
      try {
        let response = await fetch(
          "https://reto-api-rest-server.herokuapp.com/clients"
        );
        let json = await response.json();
        console.log("json RESPONSE", json);
        setList(json);
        let extraOut: any = [];
        let extraSeries: any = [];
        json.map((item: any) => extraOut.push(item.name));
        json.map((item: any) => extraSeries.push(item.age));
        setOptions({
          chart: {
            id: "apexchart-example",
          },
          xaxis: {
            categories: extraOut,
          },
        });

        setSeries([
          {
            name: "series-1",
            data: extraSeries,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    const getValuesFromApi = async () => {
      try {
        let response = await fetch(
          "https://reto-api-rest-server.herokuapp.com/kpideclientes"
        );
        let json = await response.json();
        console.log("json RESPONSE++", json);
        setAverage(json[0].avg_age);
        setDesviation(json[0].std_age);
      } catch (error) {
        console.error(error);
      }
    };

    getClientsFromApi();
    getValuesFromApi();
  }, []);

  let history = useHistory();

  return (
    <main>
      <div className="container">
        <div className="row row-container">
          <div className="col-sm-6 options">
            <div className="formulary-radio-container-step2">
              <label className="table-title">
                Listado de nuestros Clientes
              </label>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Fecha de Nacimiento</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item: any) => (
                    <tr>
                      <th scope="row">#</th>
                      <td>{item.name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.age}</td>
                      <td>{item.date_birth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <label className="average-label ">
                  Promedio Edad Clientes:{" "}
                  <label className="average">{average} años</label>
                </label>
                <br />
                <label className="desviation-label">
                  Desviación Estandar Edad Clientes:{" "}
                  <label className="desviation">{desviation}</label>
                </label>
              </div>
            </div>
          </div>

          <div className="col-sm-6 ">
            <div className="chart-container">
              <label className="chart-title">Grafica Nombre - Edad</label>
              <Chart
                options={options}
                series={series}
                type="bar"
                width={500}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Step1;
