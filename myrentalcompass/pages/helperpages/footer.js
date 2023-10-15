import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import i18nextConfig from '~/next-i18next.config';

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], i18nextConfig)),
    },
  }
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-FooterButtonYellow text-NavTextGray py-4 text-center">
      <div className="flex justify-center items-center">
        <p className="mr-2">
          © {new Date().getFullYear()} SuperFivers.
        </p>
        <Link href="/privacy">
          <button className="underline hover:text-ButtonHoverYellow mr-2">
            {t("common:footer_text")}
          </button>
        </Link>
        <p className="mr-2">|</p>
        <Link href="/credits">
          <button className="underline hover:text-ButtonHoverYellow mr-2">
            {t("common:credits_page_title")}
          </button>
        </Link>
      </div>

    </footer>
  );
}
export default Footer;

