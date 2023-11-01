import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "~/components/LanguageSelector";
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

const NavBar = ({ activePage }) => {
  const { t } = useTranslation();
  return (
    <nav
      className={`relative top-0 left-0 h-20 w-full p-4 flex items-center justify-between bg-MapNavGray shadow-md z-50`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <div className="flex ml-4 sm:ml-8 sm:left-4 items-center">
              <Image
                src="/mrc-logov3.png"
                alt="MRC Logo"
                width={140}
                height={140}
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between lg:space-x-16 md:space-x-10 sm:sapce-x-6">
          <NavBarButton text={t("common:menu_item_1")} href="/" isActive={activePage === "Home"} />
          <NavBarButton text={t("common:menu_item_2")} href="/resources" isActive={activePage === "What you need to do"} />
          <NavBarButton text={t("common:menu_item_3")} href="/rights" isActive={activePage === "What you need to know"} />
          <NavBarButton text={t("common:menu_item_4")} href="/liveability" isActive={activePage === "What is liveability"} />
        </div>
        <div className="flex items-center justify-betwee">
          <LanguageSelector text={t("common:language_selector_text")} className="mr-8"></LanguageSelector>
          <NavBarButton text={t("common:menu_item_5")} special={true} href="/map" isActive={activePage === "Find where to live"} />
        </div>
      </div>
    </nav>
  );
};

const NavBarButton = ({ text, special, href, isActive }) => (
  <Link href={href}>
    <div
      className={`text-center navbar-button ${special ? "call-action-button" : ""} ${isActive ? "navbar-button-active" : ""
        }`}
    >
      {text}
    </div>
  </Link>
);

export default NavBar;