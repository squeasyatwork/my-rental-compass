import Head from "next/head";
import Navbar from "./navbar.js";

function Resources() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Resources</title>
        <meta name="description" content="Valuable resources for renters." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Other resources" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <p>This page is a work in progress still!</p>
        </section>
      </main>
    </>
  );
}

export default Resources;
