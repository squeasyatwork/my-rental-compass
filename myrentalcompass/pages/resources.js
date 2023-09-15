import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import UserguideBar from "~/components/UserguideBar.js";

export default function Resources() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to do</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black">
        <Navbar activePage="What you need to do" className="z-10" />

        <div className="relative h-3/5 w-full">
          <img
            src="/liveable-cities.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col justify-center my-44">
              <h1 className="text-5xl font-bold text-center">
                Knowing what to do to apply for a rental can be
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                confusing!
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                Follow our guide to take you on the journey of
              </h1>
              <h2 className="text-5xl font-bold text-center mt-4">
                applyng for a property
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-white px-6 pb-20 items-center p-8">
          <div className="relative flex flex-col justify-between h-full text-HeadingTextGray">
            <h1 className="text-5xl font-bold text-center">
              Follow our step-by-step guide below to help you
            </h1>
            <h1 className="text-5xl font-bold text-center mt-4">
              understand the rental process
            </h1>
          </div>
          <div className="relative my-8">
            <UserguideBar />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
