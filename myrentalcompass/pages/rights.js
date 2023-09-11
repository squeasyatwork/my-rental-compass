import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";

function Rights() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Rights</title>
        <meta name="description" content="Know your rights as a renter." />
      </Head>

      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="Understand your rights" />

        <section className="font-inter flex flex-col min-h-screen text-NavTextGray">
          <div className="relative h-3/5 w-full">
            <img
              src="/liveable-cities.jpeg"
              alt="Description of the image"
              className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
            />
            <div className="relative z-10 flex flex-col justify-between h-full text-BackgroundWhite">
              <div className="flex flex-col items-center space-y-6 mt-36">
                <div className="flex flex-col justify-center">
                  <h1 className="text-5xl font-bold text-center">
                    Everyone has the right to
                  </h1>
                  <h1 className="text-5xl font-bold text-center mt-4">
                    affordable, safe and liveable housing
                  </h1>
                  <h2 className="text-2xl font-medium text-center mt-16">
                    We are here to help students in Melbourne to
                  </h2>
                  <h2 className="text-2xl font-medium text-center">
                    find the right suburb to live
                  </h2>
                </div>
              </div>
              <div className="flex flex-col items-end pb-4 pr-4">
                <h2 className="text-xs font-normal">
                  Picture credit: Australian Urban Observatory
                </h2>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Rights;
