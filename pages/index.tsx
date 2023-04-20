import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <div className="main-container">
          <h1>
            Click to <Link href={"login"}  style={{color:"blue"}}>Login</Link> page
          </h1>
          <h1>
            Click to<Link href={"dashboard"} style={{color:"blue"}}> DashBoard </Link>page
          </h1>
        </div>
      </div>
    </>
  );
}
