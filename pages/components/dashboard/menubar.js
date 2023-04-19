import {
  faTags,
  faDashboard,
  faUserCircle,
  faCalendarAlt,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./dash.module.css";
import Link from "next/link";

export default function Menubar() {
  return (
      <div className={styles.container}>
        <aside className={styles.aside}>
          <div className={styles.top}>Board.</div>
          <div className={styles.sidebar}>
            <Link href={"/"} className={styles.link} style={{fontWeight:"600"}}>
              <span>
                <FontAwesomeIcon 
                  icon={faDashboard}
                  style={{ color: "white",maxHeight:"18px"}}
                />
              </span>
              DashBoard
            </Link>
            <Link href={"/"} className={styles.link}>
              <span>
                <FontAwesomeIcon icon={faTags} style={{ color: "white",maxHeight:"18px" }} />
              </span>
              Transactions
            </Link>
            <Link href={"/"} className={styles.link}>
              <span>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ color: "white",maxHeight:"18px" }}
                />
              </span>
              Schedules
            </Link>
            <Link href={"/"} className={styles.link}>
              <span>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ color: "white",maxHeight:"18px" }}
                />
              </span>
              User
            </Link>
            {/* <Link href={"/"}>
              <span>
                <FontAwesomeIcon icon={faGear} style={{ color: "white" }} />
              </span>
              {" "}
              Settings
            </Link> */}
          </div>
        </aside>
        <div className={styles.footer}>
          <Link href={"/"} className={styles.footerContent} >Help</Link>
          <Link href={"/"} className={styles.footerContent} >Contact Us</Link>
        </div>
      </div>
  );
}
