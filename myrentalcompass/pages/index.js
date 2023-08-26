import Head from "next/head";
import Navbar from "./navbar.js";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Home</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
      </Head>

      <div className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Home" />

        <div className="relative" style={{ height: "50vh", marginTop: "6.6rem", zIndex: "-1"}}>
          <div className=" absolute inset-0 bg-cover bg-center"
            style = {{
              backgroundImage: "url('/liveable-cities.jpeg')",
              backgroundSize: "cover",
              filter: "brightness(0.8)",
              //zIndex: "-1",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-5xl font-bold">Everyone has a right for an</h1>
              <br></br>
              <h1 className="text-5xl font-bold">Affordable, Safe and Liveable housing</h1>
              <br></br><br></br><br></br>
              <h2 className="text-3xl font-normal">We are here to help you find the place you can call home</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
