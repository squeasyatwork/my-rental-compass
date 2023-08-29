import Head from "next/head";
import Navbar from "./helperpages/navbar.js";

function Rights() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Rights</title>
        <meta name="description" content="Know your rights as a renter." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Understand your rights" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <p>This page is a work in progress still!</p>
        </section>
      </main>
    </>
  );
}

export default Rights;
