import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import HomeTemplate from "../Templates/home";

type Props = {
  theme: string
}
const Home: NextPage<Props> = ({theme}) => {
  return (
    <>
      <Head>
        <title>Home · Where in the world?</title>
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <HomeTemplate theme={theme}/>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext){
  const {theme} = parseCookies(context);

  return {
    props: { theme }
  }
}

export default Home;
