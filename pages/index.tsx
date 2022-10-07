import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../components/main";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Main />
      {/* <Native /> */}
    </div>
  );
};

export default Home;
