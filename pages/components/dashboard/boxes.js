import styles from "./dash.module.css";

const Boxes = function () {
  return (
    <>
      <div className={styles.box_con}>
        <div className={styles.box_card}>
          <div className={ styles.box_con1}>
            <h4 style={{ marginBottom: "8px" }}>Today's schedule</h4>
            <div style={{ fontSize: ".8rem" }}>May-June 2023</div>
          </div>
          <div className={styles.pie_chart}>
            <div>piechart</div>
            <div>
              <div>
                <span className='circle'></span>
              </div>
              <div>
                basic trees
              </div>
              <div>
                basic trees
              </div>
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
