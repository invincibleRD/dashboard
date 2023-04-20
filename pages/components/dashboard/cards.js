import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./dash.module.css";
import { faCalendar, faCircle, faGauge, faTags, faThumbsUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Cards() {
  return (
    <>
      <div className={styles.card_con}>
        <div className={styles.card} style={{ backgroundColor: "#DDEFE0" }}>
          <div className={styles.card_text}>
            Total Revenues
            <h2>$2,129,430</h2>
          </div>
          <div className={styles.card_icon}>
            <FontAwesomeIcon icon={faGauge}></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.card} style={{ backgroundColor: "#F4ECDD" }}>
          <div className={styles.card_text}>
            Total Transactions
            <h2>1520</h2>
          </div>
          <div className={styles.card_icon}>
            <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.card} style={{ backgroundColor: "#EFDADA" }}>
          <div className={styles.card_text}>
            Total Likes
            <h2>9,721</h2>
          </div>
          <div className={styles.card_icon}>
            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
          </div>
        </div>
        <div className={styles.card} style={{ backgroundColor: "#DEE0EF" }}>
          <div className={styles.card_text}>
            Total Users
            <h2>852</h2>
          </div>
          <div className={styles.card_icon}>
            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
          </div>
        </div>
        {/* <div className={styles.card} style={{backgroundColor:" #F4ECDD"}}>
            total
        </div>
        <div className={styles.card} style={{backgroundColor:" #EFDADA"}}>
            total
        </div>
        <div className={styles.card} style={{backgroundColor:" #DEE0EF"}}>
            total
        </div> */}
      </div>
    </>
  );
}
