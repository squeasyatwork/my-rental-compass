import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";


export default function Rights() {
  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to know</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <Navbar className="z-10" />
      <main className="font-inter flex flex-col min-h-screen text-black justify-start w-full h-full bg-white">
        <div className="relative flex flex-col">
          <img
            src="/privacy_background.jpeg"
            alt="privacy"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-center h-full text-center ">
            <div className="flex flex-col justify-center items-center space-y-6 my-40 text-BackgroundWhite">
              <h2 className=" text-5xl font-bold max-w-4xl">
                Your Privacy Matters to Us
              </h2>
              <h2 className="text-4xl font-bold">We are Committed to Safeguarding Your Personal Information</h2>
            </div>
          </div>
        </div>
        <div className=" font-bold text-5xl text-HeadingTextGray mt-4 mb-4 px-6">
          <h1>Our Privacy Promise</h1>
        </div>
        <div className="flex flex-col  justify-center items-center text-2xl p-6 space-y-4">
            <h2 className=" max-w-7xl">At My Rental Compass, we are committed to respecting your privacy and ensuring the security of your personal information.</h2>
            <p className=" max-w-7xl">
                1. No Collection of Personal Data: My Rental Compass is designed to provide you with rental information and
                resources without collecting any personal information. We do not request or store any information that can
                identify you personally, such as your name, email address, phone number, or physical address. 
            </p>
            <p className=" max-w-7xl">
                2. Automatic Data Collection: Like many websites, we may collect certain non-personal data automatically, including your IP address, browser type, and operating system. This information is collected for the sole purpose of improving our website's performance, security, and user experience. 
                
            </p>
            <p className="max-w-7xl">
                3. Cookies and Tracking: We do not use cookies or any tracking technologies to monitor your online behaviour. We respect your privacy and aim to provide you with a simple, data-minimal experience on our platform. 
            </p>
            <p className="max-w-7xl">
                4. Links to Third-Party Websites: Our website may contain links to third-party websites, such as rental service providers or government departments. Please note that once you leave our website, our Privacy Notice no longer applies, and we encourage you to review the privacy policies of those third-party websites.
            </p>
            
        </div>
        <div className="flex justify-center items-center my-8">
            <Link href="/">
                <button className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button bg-ResourceButtonYellow">
                    Return Home
                </button>
            </Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
