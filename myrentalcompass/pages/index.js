import Head from "next/head";
import Navbar from "./navbar.js";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Home</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Home" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <p>Hello Zecheng and Malek</p>
        </section>
      </main>
    </>
  );
}
