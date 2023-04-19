import { faBell, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Header(){
    return (
        <>
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