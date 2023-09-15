import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import UserguideBar from "~/components/UserguideBar.js";
import Image from "next/image";

export default function Rights() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to know</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black">
        <Navbar activePage="What you need to know" className="z-10" />

        <div className="relative h-3/5 w-full">
          <img
            src="/businesswoman.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col justify-center my-44">
              <h1 className="text-5xl font-bold text-center">
               As a tenant, you have rights and to live in a
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                safe, secure and quiet environment
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                that is managed in accordance with the law
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-white px-6 items-center p-8">
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center text-HeadingTextGray font-bold text-4xl">
              <h2>Understand your </h2>
              <h2>rights and </h2>
              <h2>responsibilities</h2>
            </div>
            <div className="flex">
              <Image
                src="/woman.gif"
                alt="girl"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
