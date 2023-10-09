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

export default function Rights() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{"MyRentalCompass | " + t("dict2:privacy_tab_title")}</title>
        <meta name="description" content="Privacy Policy" />
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
            <div className="flex flex-col justify-center items-center space-y-6 my-40 text-gray-100/90">
              <h2 className=" text-5xl font-bold max-w-4xl">
                {t("dict2:privacy_banner_title")}
              </h2>
              <h2 className="text-4xl font-bold">{t("dict2:privacy_banner_byline")}</h2>
            </div>
          </div>
        </div>
        <div className=" font-bold text-5xl text-HeadingTextGray mt-4 mb-4 px-6">
          <h1>{t("dict2:privacy_description_heading")}</h1>
        </div>
        <div className="flex flex-col  justify-center items-center text-2xl p-6 space-y-4">
          <h2 className=" max-w-7xl">{t("dict2:privacy_description")}</h2>
          <p className=" max-w-7xl">
            {t("dict2:privacy_description_point_1")}
          </p>
          <p className=" max-w-7xl">
            {t("dict2:privacy_description_point_2")}

          </p>
          <p className="max-w-7xl">
            {t("dict2:privacy_description_point_3")}
          </p>
          <p className="max-w-7xl">
            {t("dict2:privacy_description_point_4")}
          </p>

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
