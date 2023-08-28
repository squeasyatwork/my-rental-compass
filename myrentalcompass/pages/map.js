import Head from "next/head";
import Navbar from "./helperpages/navbar.js";

function Map() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Map</title>
        <meta name="description" content="Find the best places to live." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Find where to live" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <p>This page is a work in progress still!</p>
        </section>
      </main>
    </>
  );
}

export default Map;
