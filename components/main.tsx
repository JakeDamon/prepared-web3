import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CryptoCards, Button } from "@web3uikit/core";

const Main: NextPage = () => {
  return (
    <div className={styles.container}>
      <>
        <CryptoCards
          chain="ethereum"
          bgColor="blue"
          chainType="Network"
          onClick={console.log}
        />
        <Button theme="primary" type="button" text="Launch Dapp" />
      </>
    </div>
  );
};

export default Main;
