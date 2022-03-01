import type { NextPage } from "next";
import Head from "next/head";
import HomeTemplate from "../Templates/home";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home · Where in the world?</title>
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
