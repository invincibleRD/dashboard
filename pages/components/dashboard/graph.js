import s from "./dash.module.css";
import React, { useState } from "react";
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
export default function Graph() {
    const Data = {
        label: ["Weeks1", "Weeks2", "Weeks3", "Weeks4"],
        data: {
          user: {
            january: [92, 78, 90, 56],
            fabuary: [92, 43, 33, 56],
            march: [56, 65, 88, 56],
            april: [34, 90, 77, 56],
            may: [33, 45, 98, 56],
            june: [77, 43, 54, 45]
          },
          guest: {
            january: [45, 34, 89, 67],
            fabuary: [56, 79, 56, 34],
            march: [78, 23, 90, 56],
            april: [45, 78, 76, 90],
            may: [54, 88, 90, 56],
            june: [88, 58, 67, 34]
          },
          products: {
            basic_tees: 55,
            custom_short_pants: 31,
            super_hoodies: 14
          }
        }
      };
  const arr1 = Data.data.user.january;
  const arr2 = Data.data.guest.january;
  const [data, setdata] = useState({
    labels: Data.label,
    datasets: [
      {
        label: "First Dataset",
        data: arr1,
        tension: 0.4,
        pointRadius: 0,
        borderColor: "#9BDD7C", // color of lines first user
        borderWidth: 2,
      },
      {
        label: "Second Dataset",
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
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks :  {
         align : "center"
        }
      },
      y: {
        zeroLineWidth: 0, // hide the y-axis line that connects to the origin
        zeroLineColor: 'transparent',
        beginAtZero: true,
        ticks: {
          stepSize : 30,
          maxTicksLimit: 5, // maximum number of ticks to display
        },
      },
    },
  };
  return (
    <div className={s.graph_con}>
      <div className="graph-p">Activities</div>
      <div>
        <div style={{position : "relative"}}>
          <select
            style={{
              position: "absolute",
              border: "none",
              outline: "none",
            }}
            onChange={(event) => {
              const val = event.target.value;
              const v = Data.data.user[val];
              const v1 = Data.data.guest[val];
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
};

