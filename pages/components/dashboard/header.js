import { faBell, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Header(){
    return (
        <>
        <div  className="dashboard-header">
            <div style = {{fontSize : '1.5rem'}} className="graph-p">Dashboard</div>
             <div style={{display : "flex", width : "25%" , justifyContent : "space-between"}}>
              <input placeholder="Search..."/>
              <FontAwesomeIcon style={{height:"30px"}} icon={faBell}></FontAwesomeIcon>
              <img  className ="dot1" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzyQcBu_7EH0wSSW14L4Edxsj3X8AJKcy3UBpQE33iMrZ8Z3SNXmPpEZyqsl898vYwI&usqp=CAU'} alt = {"this is an image"} />
             </div>
        </div>
        </>
    )
}