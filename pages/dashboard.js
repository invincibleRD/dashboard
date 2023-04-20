import Boxes from "./components/dashboard/boxes";
import Cards from "./components/dashboard/cards";
import Header from "./components/dashboard/header";
import Menubar from "./components/dashboard/menubar";
import styles from "./dashboard.module.css";
import clientPromise from "../lib/mongodb";
import s from "./components/dashboard/dash.module.css";
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
export default function Dashboard({ dashboard }) {
  // console.log(dashboard);
  let Data = dashboard[4].data;
  const arr1 = [100, 390, 420, 150, 300, 450, 350, 180, 280];
  const arr2 = [200, 390, 270, 200, 270, 300, 270, 220, 450];
  const [data, setdata] = useState({
    labels: dashboard[4].label,
    datasets: [
      {
        label: "User",
        data: arr1,
        tension: 0.4,
        pointRadius: 0,
        borderColor: "#9BDD7C", // color of lines first user
        borderWidth: 3,
      },
      {
        label: "Guest",
        data: arr2,
        tension: 0.4,
        pointRadius: 0,
        borderColor: "#E9A0A0", // color of lines second guest
        borderWidth: 3,
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
        display: false,
        labels: {},
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
        min: 0,
        max: 500,
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          // maximum number of ticks to display
        },
      },
    },
  };
  return (
    <>
      <div className={styles.container}>
        <div className="fixed">
          <div className={styles.menubar}>
            <Menubar></Menubar>
          </div>
        </div>
        <div className={styles.leftBox}>
          <div>
            <Header></Header>
            <Cards></Cards>
            <div className={s.graph_con}>
              <div className="graph-p">Activities</div>
              <div className={s.box_con1}>
                <select
                  style={{
                    marginBottom: "10px",
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
                  <option className={styles.option} value="january">
                    January{" "}
                  </option>
                  <option className={styles.option} value="fabuary">
                    {" "}
                    Febuary
                  </option>
                  <option className={styles.option} value="march">
                    {" "}
                    March
                  </option>
                  <option className={styles.option} value="april">
                    April{" "}
                  </option>
                  <option className={styles.option} value="may">
                    May{" "}
                  </option>
                  <option className={styles.option} value="june">
                    {" "}
                    June
                  </option>
                </select>
                <div className={s.box_con1}>
                  <div className={s.lables}>
                    <span
                      className="dot"
                      style={{ backgroundColor: "#EE8484" }}
                    ></span>{" "}
                    Guest
                  </div>

                  <div className={s.lables}>
                    <span
                      className="dot"
                      style={{ backgroundColor: "#98D89E" }}
                    ></span>{" "}
                    User
                  </div>
                </div>
              </div>
              <div>
                <Line
                  style={{ height: "180px", width: "97%" }}
                  className="graph-base"
                  data={data}
                  options={options}
                />
              </div>
            </div>
            {/* <Graph> </Graph> */}
            {/* <Top></Top> */}
            <Boxes></Boxes>
          </div>
        </div>
      </div>
    </>
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
