import clientPromise from "../lib/mongodb";
import s from './components/dashboard/dash.module.css'
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);
export default function Top({ dashboard }) {
    console.log(dashboard);
    const Data = dashboard[0].data;
    const arr1 = [10,20,30,40];
    const arr2 = [40,30,20,10];
    const [data, setdata] = useState({
      labels: Data.label,
      datasets: [
        {
          label: "User",
          data: arr1,
          tension: 0.4,
          pointRadius: 0,
          borderColor: "#9BDD7C", // color of lines first user
          borderWidth: 2,
        },
        {
          label: "Guest",
          data: arr2,
          tension: 0.4,
          pointRadius: 0,
          borderColor: "#E9A0A0", // color of lines second guest
          borderWidth: 2,
        },
      ],
    });
    const options = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            font: {
              size: 16,
              weight: "bold",
              family: "Arial",
            },
            color: "#333",
            pointStyle: "circle",
            pointRadius: 2,
          },
          // other options for the legend here
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 30,
            maxTicksLimit: 5, // maximum number of ticks to display
          },
        },
      },
    };
    return (
      <div className={s.graph_con}>
        <div className="graph-p">Activities</div>
        <div>
          <div style={{ position: "relative" }}>
            <select
              style={{
                position: "absolute",
                border: "none",
                outline: "none",
              }}
              onChange={(event) => {
                const val = event.target.value;
                const v = Data.user[val];
                const v1 = Data.guest[val];
                setdata((prev) => {
                  return {
                    ...prev,
                    datasets: [
                      { ...prev.datasets[0], data: v },
                      { ...prev.datasets[1], data: v1 },
                    ],
                  };
                });
              }}
            >
              <option style={{ border: "none" }} value="january">
                January{" "}
              </option>
              <option style={{ border: "none" }} value="fabuary">
                {" "}
                Febuary
              </option>
              <option style={{ border: "none" }} value="march">
                {" "}
                March
              </option>
              <option style={{ border: "none" }} value="april">
                April{" "}
              </option>
              <option style={{ border: "none" }} value="may">
                May{" "}
              </option>
              <option style={{ border: "none" }} value="june">
                {" "}
                June
              </option>
            </select>
          </div>
          <div>
            <Line
              style={{ height: "200px", width: "97%" }}
              className="graph-base"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("bookings");

    const teachers = await db.collection("dashboard").find({}).toArray();

    return {
      props: { dashboard: JSON.parse(JSON.stringify(teachers)) },
    };
  } catch (e) {
    console.error(e);
  }
}
