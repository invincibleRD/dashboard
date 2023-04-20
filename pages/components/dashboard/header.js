import { faBell, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Menubar from "./menubar";
function useReturn() {
  const [arr, changearr] = useState([1000]);
  useEffect(() => {
    const callback = ()=> {
        changearr(window.innerWidth) ;
    }
    window.addEventListener("resize", callback)
    return ()=> {window.removeEventListener("resize", callback)}
  }, []);
  return arr;
}
export default function Header() {
     const a = useReturn();
  const [disp, changedisp] = useState("none");
  const [font, changefont] = useState(true);
  return (
    <>
      <div className="menubar-icon-header">
        <FontAwesomeIcon
          className="head-font"
          icon={font ? faBars : faXmark}
          style={{
            cursor: "pointer",
            height: "18px",
            width: "15px",
            top: "60px",
            margin: "5px",
            marginRight: "20px",
          }}
          onClick={(e) => {
            e.preventDefault();
            if (disp === "inline" || a > 1100) {
              changedisp("none");
              changefont(true);
            } else {
              changedisp("inline");
              changefont(false);
            }
          }}
        />
        <div
          style={{
            zIndex: "100",
            position: "absolute",
            display: (() => {
              return a > 1130 ? "none" : disp;
            })(),
            top: "40px",
          }}
        >
          <Menubar />
        </div>
        <div className="dashboard-header">
          <div
            style={{ fontSize: "1.5rem", margin: "0", padding: "0" }}
            className="graph-p"
          >
            Dashboard
          </div>
          <div style={{ display: "flex" }}>
            <input className="topicon" placeholder="Search..." />
            <FontAwesomeIcon
              className="topIcon"
              style={{ height: "30px" }}
              icon={faBell}
            ></FontAwesomeIcon>
            <img
              className="dot1"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
              alt={"this is an image"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
