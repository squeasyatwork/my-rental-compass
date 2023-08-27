import Head from "next/head";
import Navbar from "./navbar.js";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Home</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
      </Head>

      <main>
        <div className="font-inter flex flex-col h-screen">
          <Navbar activePage="Home" />

          <div className="relative" style={{ height: "60vh", marginTop: "6.6rem", zIndex: "-1"}}>
            <div className=" absolute inset-0 bg-cover bg-center"
              style = {{
                backgroundImage: "url('/liveable-cities.jpeg')",
                backgroundSize: "cover",
                //filter: "brightness(0.8)",
                //zIndex: "-1",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className=" flex flex-col items-center" style={{marginTop: "5rem"}}>
                  <br></br><br></br>
                  <h1 className="text-5xl font-bold">Everyone has a right for an</h1>
                  <br></br>
                  <h1 className="text-5xl font-bold">Affordable, Safe and Liveable housing</h1>
                  <br></br><br></br><br></br>
                  <h2 className="text-3xl font-normal">We are here to help you find the place you can call home</h2>
                  <br></br><br></br>
                  <Link href="/questionair">
                    <button className="font-istok text-2xl font-semibold bg-yellow-400 text-black rounded-2xl p-8"> Find where to live </button>
                  </Link>
                  <br></br>
                </div>
                <div className=" flex flex-col items-end">
                  <h2 className=" text-base font-normal">Picture credit: Australian Urban Observatory</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
