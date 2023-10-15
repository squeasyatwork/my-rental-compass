import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import i18nextConfig from '~/next-i18next.config';

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale, ['common', 'dict2'], i18nextConfig)),
    },
  }
}

export default function Credits() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{"MyRentalCompass | " + t("common:credits_page_title")}</title>
        <meta name="description" content="Credits" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar className="z-10" />
      <main className="font-istok flex flex-col min-h-screen text-black justify-start w-full h-full bg-white">
        <div className="relative flex flex-col">
          <img
            src="/credits_background.jpeg"
            alt="credits"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-center h-full text-center ">
            <div className="flex flex-col justify-center items-center space-y-6 my-40 text-gray-100/90">
              <h2 className=" text-5xl font-bold max-w-4xl">
                {t("common:credits_page_title")}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center p-6 ">
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="flex flex-col">
              <h2 className=" text-xl font-bold"> {t("common:credits_page_home")}</h2>
              <a href="https://www.rmit.edu.au/research/our-research/enabling-impact-platforms/case-studies/planning-liveable-cities" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.rmit.edu.au/research/our-research/enabling-impact-platforms/case-studies/planning-liveable-cities</a>
              <a href="https://www.flaticon.com/free-icons/home" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.flaticon.com/free-icons/home</a>
              <a href="https://www.flaticon.com/free-icons/house" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.freepik.com/free-photo/kitchen-student-dormitory-group-interracial-students-engaged-education_29719888.htm Image by fxquadro on Freepik</a>
              <a href="https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.flaticon.com/free-icons/home Home icons created by Freepik - Flaticon </a>
              <a href="https://www.flaticon.com/free-icons/playground" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.flaticon.com/free-icons/playground Playground icons created by Bamicon - Flaticon </a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold"> {t("common:credits_page_questionnaire")}</h2>
              <a href="https://www.flaticon.com/free-icons/university" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.flaticon.com/free-icons/university</a>
              <a href="https://www.flaticon.com/free-icons/landscape" className="text-HeadingTextGrey font-istok hover:underline ">● https://www.flaticon.com/free-icons/landscape </a>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{t("common:credits_page_resources")}</h2>
              <a href="https://www.flaticon.com/free-animated-icon/woman_11617198?term=woman&page=2&position=27&origin=search&related_id=11617198" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-animated-icon/woman_11617198?term=woman&page=2&position=27&origin=search&related_id=11617198</a>
              <a href="https://www.flaticon.com/free-animated-icon/speech-bubble_8716872?term=speech+bubble&page=1&position=11&origin=search&related_id=8716872" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-animated-icon/speech-bubble_8716872?term=speech+bubble&page=1&position=11&origin=search&related_id=8716872</a>
              <a href="https://fonts.google.com/icons?selected=Material+Symbols+Outlined:check:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=check" className="text-HeadingTextGrey font-istok hover:underline">● https://fonts.google.com/icons?selected=Material+Symbols+Outlined:check:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=check</a>
              <a href="https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629</a>
              <a href="https://www.flaticon.com/free-icon/chat-bubble_9475074?term=speech+bubble&page=1&position=69&origin=search&related_id=9475074" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/chat-bubble_9475074?term=speech-bubble&page=1&position=69&origin=search&related_id=9475074</a>
              <a href="https://www.flaticon.com/free-icon/airplane_1585595" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/airplane_1585595</a>
              <a href="https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110</a>
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{t("common:credits_page_rights")}</h2>
              <a href="https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110</a>
              <a href="https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629</a>
              <a href="https://www.flaticon.com/free-icon/house_2954870?related_id=2946601&origin=search" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/house_2954870?related_id=2946601&origin=search</a>
              <a href="https://www.flaticon.com/free-icon/home-repair_3084918?term=house+repair&related_id=3084918" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/home-repair_3084918?term=house+repair&related_id=3084918</a>
              <a href="https://www.flaticon.com/free-icon/chat_3286051?term=tell&related_id=3286051" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flaticon.com/free-icon/chat_3286051?term=tell&related_id=3286051</a>
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{t("common:credits_page_privacy")}</h2>
              <a href="https://www.flickr.com/photos/125135071@N06/15071516239" className="text-HeadingTextGrey font-istok hover:underline">● https://www.flickr.com/photos/125135071@N06/15071516239</a>
            </div>

            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{t("common:credits_page_credits")}</h2>
              <a href="https://www.pexels.com/photo/top-view-photography-of-city-2157401/" className="text-HeadingTextGrey font-istok hover:underline">● https://www.pexels.com/photo/top-view-photography-of-city-2157401/</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-8">
          <Link href="/">
            <button className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button bg-ResourceButtonYellow">
              {t("dict2:rights_return_home_button")}
            </button>
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
