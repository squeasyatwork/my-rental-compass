import Head from "next/head";
import Navbar from "./navbar.js";
import Link from "next/link";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://develop.d1f77h13nbf5uz.amplifyapp.com/${src}?w=${width}&q=${
    quality || 75
  }`;
};
// https://develop.d1f77h13nbf5uz.amplifyapp.com/

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | Home</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
      </Head>

      <main>
        <div className="font-inter flex flex-col h-screen">
        <div style={{ position: "fixed", width: "100%", zIndex: 100 }}>
          <Navbar activePage="Home" />
        </div>

          <div className="relative" style={{ height: "60vh" }}>
            <div
              className="inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/liveable-cities.jpeg')",
                backgroundSize: "cover",
                // filter: "brightness(0.8)",
                //zIndex: "-1",
              }}
            >
              <div className="inset-0 flex flex-col justify-between text-white">
                <div
                  className=" flex flex-col items-center"
                  style={{ marginTop: "5rem" }}
                >
                  <br></br>
                  <br></br>
                  <h1 className="text-5xl font-bold text-center">
                    Everyone has a right for an
                  </h1>
                  <br></br>
                  <h1 className="text-5xl font-bold text-center">
                    Affordable, Safe and Liveable housing
                  </h1>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h2 className="text-3xl font-normal text-center">
                    We are here to help you find the place you can call home
                  </h2>
                  <br></br>
                  <br></br>
                  <center>
                    <Link href="/questionnaire">
                      <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center p-8">
                        {" "}
                        Find where to live{" "}
                      </button>
                    </Link>
                  </center>
                  <br></br>
                </div>
                <div className=" flex flex-col items-end">
                  <h2 className=" text-base font-normal">
                    Picture credit: Australian Urban Observatory
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            id="your-questions-answered"
            style={{ "background-color": "white" }}
          >
            <h1 className="index-page-section-heading">
              Your questions answered
            </h1>
            <div className="yqa-cross-section-container">
              <div id="yqa-section-1" className="justify-center mx-3">
                <Image
                  loader={imageLoader}
                  src="/looking-to-rent-icon.jpeg"
                  width={100}
                  height={120}
                  alt="looking-to-rent-icon"
                  loading="eager"
                  className="@apply mx-auto"
                />
                <div id="looking-to-rent" className="yqa-subheading">
                  Looking to rent?
                </div>
                <p className="copywrite-content mx-2 my-4">
                  Finding a place to live in Victoria can be very frustrating.
                  We know, because we have been there too. That is why we are
                  driven to help young people like you to make an informed
                  decision in finding the place to call home in Victoria.
                </p>
                <center>
                  <Link href="/map">
                    <button className="call-action-button text-NavTextGray font-bold justify-center align-center mx-1 my-5">
                      {" "}
                      Find where to live{" "}
                    </button>
                  </Link>
                </center>
              </div>
              <div id="yqa-section-2" className="justify-center mx-3">
                <Image
                  loader={imageLoader}
                  src="curious-icon.jpeg"
                  width={100}
                  height={120}
                  alt="looking-to-rent-icon"
                  loading="eager"
                  className="@apply mx-auto"
                />
                <div id="curious-what-it-means" className="yqa-subheading">
                  Curious what it means?
                </div>
                <p className="copywrite-content mx-2 my-4">
                  Not everyone is born to be a lawyer. Tenancy laws and contract
                  can be very confusing, especially if it is your first time. We
                  have curated an easy-to-follow guide to help you understand
                  your rights and responsibilities as a renter.
                </p>
                <center>
                  <Link href="/rights">
                    <button className="call-action-button text-NavTextGray font-bold justify-center align-center mx-1 my-5">
                      {" "}
                      Know your tenant rights{" "}
                    </button>
                  </Link>
                </center>
              </div>
              <div id="yqa-section-3" className="justify-center mx-3">
                <Image
                  loader={imageLoader}
                  src="liveability-icon.jpeg"
                  width={100}
                  height={120}
                  alt="looking-to-rent-icon"
                  loading="eager"
                  className="@apply mx-auto"
                />
                <div id="what-is-liveability" className="yqa-subheading">
                  What is liveability?
                </div>
                <p className="copywrite-content mx-2 my-4">
                  Living in a safe and liveable neighbourhood is everyone’s
                  dream. But do you know what makes a place liveable?
                  Researchers have done many studies on this, and we are putting
                  them here to help you make an informed decision when renting.
                </p>
                <center>
                  <Link href="/liveability">
                    <button className="call-action-button text-NavTextGray font-bold justify-center align-center mx-1 my-5">
                      {" "}
                      Understand liveability{" "}
                    </button>
                  </Link>
                </center>
              </div>
            </div>
            <h1 className="index-page-section-heading">Other resources</h1>
            <div className="yqa-cross-section-container">
              <div
                id="or-section-1"
                className="grid grid-rows-2 align-center justify-center mx-3"
              >
                <div className="grid grid-cols-2 align-center justify-center mx-3">
                  <Image
                    loader={imageLoader}
                    src="or-unsdg-picture.jpeg"
                    height={180}
                    width={150}
                    alt="or-unsdg-picture"
                    loading="eager"
                  />
                  <Image
                    loader={imageLoader}
                    src="or-unsdg-picture-2.jpeg"
                    height={180}
                    width={150}
                    alt="or-unsdg-picture-2"
                    loading="eager"
                    // className="@apply mx-auto"
                  />
                </div>
                <center>
                  <Link href="https://sdgs.un.org/goals/goal11">
                    <button className="call-action-button text-NavTextGray font-bold justify-center align-center mx-1 my-5">
                      {" "}
                      Read more{" "}
                    </button>
                  </Link>
                </center>
              </div>

              <div
                id="or-section-2"
                className="grid grid-rows-2 align-center justify-center mx-3"
              >
                <Image
                  loader={imageLoader}
                  src="or-plan-melb-picture.jpeg"
                  height={180}
                  width={200}
                  alt="or-plan-melb-picture"
                  loading="eager"
                  className="@apply mx-auto"
                />
                <center>
                  <Link href="https://www.planning.vic.gov.au/guides-and-resources/strategies-and-initiatives/plan-melbourne">
                    <button className="call-action-button text-NavTextGray font-bold justify-center align-center mx-1 my-5">
                      {" "}
                      Read more{" "}
                    </button>
                  </Link>
                </center>
              </div>
              <div
                id="or-section-3"
                className="grid grid-rows-2 align-center justify-center mx-3"
              >
                <Image
                  loader={imageLoader}
                  src="or-crt-logo.jpeg"
                  height={240}
                  width={300}
                  alt="or-crt-logo"
                  loading="eager"
                  className="@apply mx-auto"
                />
                <center>
                  <Link href="https://www.rentingcommissioner.vic.gov.au/">
                    <button className="call-action-button text-NavTextGray font-bold justify-center align-center mx-1 my-5">
                      {" "}
                      Read more{" "}
                    </button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
          <footer className="bg-FooterButtonYellow text-NavTextGray py-8 text-center mt-auto">
            <p className="text-sm">
              © {new Date().getFullYear()} SuperFivers. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
