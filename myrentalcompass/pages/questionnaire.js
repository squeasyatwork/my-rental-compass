import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Image from "next/image.js";
import Link from "next/link";

function Questionnaire() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Questionnaire</title>
        <meta
          name="description"
          content="Questionnaire to find best suburbs."
        />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Home" />

        <section
          className="flex-grow w-full flex items-center justify-center text-NavTextGray"
          style={{
            backgroundImage: "url('/liveable-cities.jpeg')",
            backgroundSize: "cover",
          }}
        >
          <div
            className="flex items-center bg-BackgroundWhite rounded-xl p-8"
            style={{ height: "60vh", zIndex: 2 }}
          >
            <div className="flex flex-col items-center font-Inter font-bold text-4xl mr-6">
              <h2> We are here to help you!</h2>
              <br></br>
              <br></br>
              <Image
                src="/questionnaire_person.svg"
                alt="Staff"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <br></br>
              <br></br>
              <Link href="/">
                <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center p-8">
                  {" "}
                  Go back{" "}
                </button>
              </Link>
            </div>
            <div className="flex flex-col font-Inter font-normal text-3xl ml-6">
              <div className=" max-w-2xl">
                <h2>
                  Finding a liveable home at an affordable rent in Melbourne can
                  be difficult, but we know it is not impossible.{" "}
                </h2>
                <br></br>
                <h2>
                  Using our own AI tool backed by huge data on Melbourne rental
                  market, we want to customise our recommendation for the place
                  to live.
                </h2>
                <br></br>
                <h2 className="font-bold">
                  To start, enter your budget for maximum rent per week
                </h2>
              </div>
              <br></br>
              <div className="flex justify-center">
                <input
                  type="text"
                  className="border-4 border-MainButtonYellow rounded-lg w-60 h-16 text-2xl text-NavTextGray font-bold text-center mr-4"
                  placeholder="$400"
                />
                <Link href="/">
                  <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center p-8 ml-6">
                    {" "}
                    Start{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-FooterButtonYellow text-NavTextGray py-8 text-center mt-auto">
          <p className="text-sm">
            © {new Date().getFullYear()} SuperFivers. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default Questionnaire;
