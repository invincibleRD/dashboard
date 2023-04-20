import { faBell, faGear,faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState} from "react" ;
import Menubar from "./menubar";
export default function Header(){
    const [disp,changedisp] = useState("none");
    return (
        <>
         <div className = "menubar-icon-header" >
             <FontAwesomeIcon 
                  icon={faBars}
                  style={{  cursor : "pointer",height:"18px", top : "60px",margin : "5px",marginRight : "20px"}} onClick={(e)=> {
                    e.preventDefault()  ;
                    if(disp==="none") {
                        changedisp("inline") ;
                    }
                    else {
                        changedisp("none");
                    }
                   }}
      />
         <div style = {{zIndex : "100",position : "absolute",display : disp,top:"100px"}}><Menubar/></div>
        <div  style = {{width : "93%"}}className="dashboard-header">
            <div style = {{fontSize : '1.5rem' , margin : "0" , padding : "0"}} className="graph-p">Dashboard</div>
                <div style={{display:"flex"}}>
              <input className = "topicon" placeholder="Search..."/>
              <FontAwesomeIcon className = "topIcon"style={{height:"30px"}} icon={faBell}></FontAwesomeIcon>
              <img  className ="dot1" src={'https://www.w3schools.com/howto/img_avatar.png'} alt = {"this is an image"} />
             </div>
             </div>
             </div>
        </>
    )
}