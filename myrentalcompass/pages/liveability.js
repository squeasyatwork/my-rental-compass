import Head from "next/head";
import Navbar from "./helperpages/navbar.js";

function Liveability() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Liveability</title>
        <meta name="description" content="Learn about liveability factors." />
      </Head>

      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="What is liveability" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <p>This page is a work in progress still!</p>
        </section>
      </main>
    </>
  );
}

export default Liveability;
