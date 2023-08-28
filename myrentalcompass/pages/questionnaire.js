import Head from "next/head";
import Navbar from "./navbar.js";

function Questionnaire() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Questionnaire</title>
        <meta name="description" content="Questionnaire to find best suburbs." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Home" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <p>This page is a work in progress still!</p>
        </section>
      </main>
    </>
  );
}

export default Questionnaire;
