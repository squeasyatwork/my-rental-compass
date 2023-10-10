import "../src/app/styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DataProvider } from "../components/DataContext.js";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(null);

  return (
    <DataProvider value={{ data, setData }}>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'resources'], null, ['en', 'hi', 'ms', 'zh'])),
  },
});

export default appWithTranslation(MyApp);