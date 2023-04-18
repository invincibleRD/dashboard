import styles from "./dash.module.css";

const Boxes = function () {
  return (
    <>
      <div className={styles.box_con}>
        <div className={styles.box_card}>boxi</div>
        <div className={styles.box_card}>
          <div>Today's schedule</div>
          <div>
            <div>data</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Boxes;
