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
        <Menubar></Menubar>
        <div style={{ paddingLeft:"20px", width:"80%"}}>
          <Header></Header>
            <Cards></Cards>
            {/* <Graph> </Graph>  */}
          <Boxes></Boxes>
        </div>
      </div>
    </>
  );
}
