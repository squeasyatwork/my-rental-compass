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

        <div className="relative" style={{ height: "24rem" }}>
          <div className=" absolute inset-0 bg-cover bg-center"
            style = {{
              backgroundImage: "url('/liveable-cities.jpeg')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
