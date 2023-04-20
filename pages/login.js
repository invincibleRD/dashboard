import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/home.module.css";
import Board from "./components/board";
import SignUp from "./components/signup";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Listed Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Board />
        <SignUp />
      </div>
    </>
  );
}
