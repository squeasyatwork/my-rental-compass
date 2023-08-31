import * as React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import prisma from "~/lib/prisma";
import Image from "next/image.js";
import PreferencesBar from "~/components/PreferencesBar";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ImageLoader from '~/components/ImageLoader';


// This is needed to make sure that the dbResponse parameter is correctly passed on to the page component.
export const config = {
  runtime: "nodejs", // or "edge"
};

export const getServerSideProps = async (context) => {
  // const prisma = new PrismaClient();
  const feed = await prisma.airports.findMany({
    where: {
      airport_code: context.query.country,
    },
  });
  const dbResponse = JSON.parse(JSON.stringify(feed));
  // console.log("VALUE INSIDE BACKEND dbResponse: " + JSON.stringify(dbResponse));

  return { props: { dbResponse } };
}

function Map({ dbResponse }) {

  // console.log("INSIDE SCRATCHPAGE component: " + JSON.stringify(dbResponse));
  if (dbResponse.length != 0) { // i.e., the database returned something in dbResponse.
    return (
      <>
        <Head>
          <title>MyRentalCompass | Explore the Map</title>
          <meta name="description" content="Discover potential homes." />
        </Head>

        <main className="font-inter flex flex-col h-screen">
          <Navbar activePage="Find where to live" />

          <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

            <Box my="14px" bgcolor="#fff" width="80rem" borderRadius="10px" padding="10px" alignItems="center" sx={{ justifyContent: { sm: "center", lg: "space-between" } }}>
              <Grid container spacing={4}>
                <Grid item lg={2.5}>
                  <PreferencesBar></PreferencesBar>
                </Grid>
                <Grid item lg={9.5}>
                  {/* MAP COMPONENT GOES HERE */}

                  <Image loader={ImageLoader}
                    src={"/liveable-cities.jpeg"}
                    width={1300}
                    height={100}
                    alt={"liveable-cities"}
                    loading="eager"
                    className="mx-auto" style={{ borderRadius: "14px" }}></Image>


                </Grid>
              </Grid></Box>
          </section>


          <Footer />
        </main >
      </>
    );
  }
  else {  // If no records were returned by the database, dbResponse will be [] ( ,i.e., an empty array).
    return (
      <>
        <Head>
          <title>MyRentalCompass | Explore the Map</title>
          <meta name="description" content="Discover potential homes." />
        </Head>

        <main className="font-inter flex flex-col m-1 h-screen">
          <Navbar activePage="Find where to live" />

          <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

            <div>NOT FOUND IN DATABASE</div>

          </section>
          <Footer />
        </main>
      </>
    );
  }
}

export default Map;
