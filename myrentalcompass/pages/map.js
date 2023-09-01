import Head from "next/head";
import Link from "next/link";

import Navbar from "~/pages/helperpages/navbar.js";
import Footer from "~/pages/helperpages/footer.js";
import Mapone from "~/components/mapone.js";

function Mapoverview() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Map</title>
        <meta name="description" content="Find the best places to live." />
      </Head>

      <main className="font-inter flex flex-col h-screen">
        <div style={{ width: "100%", zIndex: 100 }}>
          <Navbar activePage="Find where to live" />
        </div>

        <section className="flex-grow w-full flex flex-col bg-white justify-center text-NavTextGray">
          <div className="flex flex-col justify-center px-12 pt-12">
            <h2 className="text-4xl font-bold pb-4">
              Liveability index of Melbourne suburbs
            </h2>
            <h2 className="text-2xl py-1">
              The interactive map below shows each suburb's liveability index
              based on 4 key criteria: safety, affordability, accessibility
            </h2>
            <h2 className="text-2xl"> and wellness.</h2>
          </div>
          <br />
          <div className="flex flex-col justify-center items-center pb-12">
            <Mapone />
          </div>
          <div className="flex w-full justify-center items-center">
            <div className="mt-auto flex items-center justify-center pb-16">
              <Link href="/questionnaire">
                <button className="call-action-button text-NavTextGray text-xl font-bold flex items-center justify-center w-56 p-8 mr-40">
                  Get my recommendations
                </button>
              </Link>
            </div>
            <div className="mt-auto flex items-center justify-center pb-16">
              <Link href="#"> {/* iteration2: saving past reco's */}
                <button className="call-action-button text-NavTextGray text-xl font-bold flex items-center justify-center w-56 p-8 ml-40">
                  View my previous recommendations
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Mapoverview;