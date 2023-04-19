import s from "./dash.module.css";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Data from "./data";
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
const Graph = function () {
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
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return value; // divide by 1000 and add 'k' suffix
          },
          maxTicksLimit: 5, // maximum number of ticks to display
        },
      },
    },
  };
  return (
    <div className={s.graph_con}>
      <div className="graph-p">Activities</div>
      <div>
        <div>
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

export default Graph;
