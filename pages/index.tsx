import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS and Tailwind Example</title>
        <meta name="description" content="NextJS and Tailwind Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-5xl">NextJS and Tailwind Example</h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
