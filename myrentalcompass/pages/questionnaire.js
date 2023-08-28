import Head from "next/head";
import Navbar from "./navbar.js";
import Image from "next/image.js";

function Questionnaire() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Questionnaire</title>
        <meta name="description" content="Questionnaire to find best suburbs." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen">
        <Navbar activePage="Home" />

        <section className="flex-grow w-full flex items-center justify-center text-NavTextGray" 
        style={{
          backgroundImage: "url('/liveable-cities.jpeg')",
          backgroundSize: "cover",
        }}>
          <div className="flex items-center bg-BackgroundWhite rounded-xl p-8" style={{height: "60vh", zIndex: 2}}>
            <div className="flex flex-col items-center font-Inter font-bold text-4xl mr-6">
              <h2> We are here to help you!</h2>
              <br></br><br></br>
              <Image
                src="/questionnaire_person.svg"
                alt="Staff"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col font-Inter font-normal text-3xl ml-6 text-justify-custom">
              <h2>Finding a liveable home at an affordable rent in</h2>
              <h2>Melbourne can be difficult, but we know it is not impossible.</h2>
              <br></br>
              <h2>Using our own AI tool backed by huge data on </h2>
              <h2>Melbourne rental market, we want to customise our</h2>
              <h2>recommendation for the place to live.</h2>
              <br></br><br></br>
              <h2 className="font-bold">To start, enter your budget for maximum rent per week</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Questionnaire;
