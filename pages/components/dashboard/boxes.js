import styles from "./dash.module.css";
import React , {useState} from "react"; 
import {
  Chart as ChartJS ,
  ArcElement ,
  Tooltip ,
  Legend
}  from 'chart.js';
import { Pie } from "react-chartjs-2";
//#98D89E
//#EE8484
//#F6DC7D
//beta

ChartJS.register(
  ArcElement ,
  Tooltip,
  Legend
)
const dat = {january: [92, 78, 90],
fabuary: [92, 43, 33],
march: [56, 65, 88],
april: [34, 90, 77],
may: [33, 45, 98],
june: [77, 43, 54]};
const Boxes = function () {
  const [data,setdata] = useState({
    labels : ['One','Two','Three'] ,
    datasets : [
      { 
        data : dat["january"],
        backgroundColor : ['#98D89E','#EE8484','#F6DC7D'],
        borderWidth : 0
      }
    ]
  });
  const options = {
    plugins : {  
    legend : {
        display : false
      }}
  }
  return (
    <>
      <div className={styles.box_con}>
        <div className={styles.box_card}>
          <div className={ styles.box_con1}>
            <h4 style={{ marginBottom: "8px" }}>Today's schedule</h4>
            <div style={{ fontSize: ".8rem" }}> <select
            style={{
              border: "none",
              outline: "none",
            }}
            onChange={(event) => {
              const val = event.target.value;
              const v = dat[val];
              setdata((prev) => {
                return {
                  ...prev,
                  datasets: [
                    { ...prev.datasets[0], data: v },
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
          </select></div>
          </div>
          <div className={styles.pie_chart}>
            <div>
           
              <Pie style={{width:"100px",height
            :"100px"}} data = {data} options  = {options}> </Pie>  
               
            </div>
            <div>
              <div>
                <span className='circle'></span>
              </div>
              <div className="graph-p1"><span style = {{backgroundColor:"#98D89E"}}className="dot"></span>Basic Trees</div>
              <div className="graph-p1"><span  style = {{backgroundColor : "#EE8484"}}className="dot"></span>Custom Short Pants</div>
              <div className="graph-p1"><span style = {{backgroundColor:"#F6DC7D"}}className="dot"></span>Super Hoodies</div>
            </div>
          </div>
        </div>
        <div className={styles.box_card}>
          <div className={styles.box_con1}>
            <h4 style={{ marginBottom: "8px" }}>Today's schedule</h4>
            <div style={{ fontSize: ".8rem" }}>See All</div>
          </div>
          <div>
            <div>
              <div className={styles.info}>
                <div
                  className={styles.info_text}
                  style={{ backgroundColor: "#9BDD7C" }}
                ></div>
                <div style={{ fontSize: ".8rem" }}>
                  <div style={{ color: "#666666" }}>
                    Meeting with suppliers from Kuta Bali
                  </div>
                  <div style={{ color: "#999999" }}>14.00-15.00</div>
                  <div style={{ color: "#999999" }}>
                    at Sunset Road, Kuta, Bali{" "}
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <div
                  className={styles.info_text}
                  style={{ backgroundColor: "#6972C3" }}
                ></div>
                <div style={{ fontSize: ".8rem" }}>
                  <div style={{ color: "#666666" }}>
                    Check operation at Giga Factory 1
                  </div>
                  <div style={{ color: "#999999" }}>18.00-20.00</div>
                  <div style={{ color: "#999999" }}>at Central Jakarta </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Boxes;
