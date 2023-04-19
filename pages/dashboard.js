import Boxes from "./components/dashboard/boxes";
import Cards from "./components/dashboard/cards";
import Header from "./components/dashboard/header";
import Menubar from "./components/dashboard/menubar";
import styles from "./dashboard.module.css";
import Graph from "./components/dashboard/graph.js";
export default function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menubar}>
          <Menubar></Menubar>
        </div>
        <div className={styles.leftBox}>
          <div>
            <Header></Header>
            <Cards></Cards>
            <Graph> </Graph>
            <Boxes></Boxes>
          </div>
        </div>
      </div>
    </>
  );
}
