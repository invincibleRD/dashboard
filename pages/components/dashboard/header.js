import { faBell, faGear,faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState} from "react" ;
export default function Header(){
    const [disp,changedisp] = useState("none");
    return (
        <>
         <div className = "menubar-icon">
             <FontAwesomeIcon 
                  icon={faBars}
                  style={{ cursor : "pointer",maxHeight:"18px"}}
                />
                </div>
        <div  className="dashboard-header">
            <div style = {{fontSize : '1.5rem' , margin : "0" , padding : "0"}} className="graph-p">Dashboard</div>
                <div style={{display:"flex"}}>
              <input placeholder="Search..."/>
              <FontAwesomeIcon style={{height:"30px"}} icon={faBell}></FontAwesomeIcon>
              <img  className ="dot1" src={'https://www.w3schools.com/howto/img_avatar.png'} alt = {"this is an image"} />
             </div>
             </div>
        </>
    )
}