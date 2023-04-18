import Boxes from "./components/dashboard/boxes";
import Cards from "./components/dashboard/cards";
import Graph from "./components/dashboard/graph";
import Header from "./components/dashboard/header";
import Menubar from "./components/dashboard/menubar";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <Menubar></Menubar>
        <div style={{ padding: "40px" }}>
          <Header></Header>
          <Cards></Cards>
          <Graph></Graph>
          <Boxes></Boxes>
        </div>
      </div>
    </>
  );
}
