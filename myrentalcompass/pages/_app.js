import "../src/app/styles/globals.css";

import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'resources'], null, ['en', 'hi', 'ms', 'zh'])),
  },
})

export default appWithTranslation(MyApp);
