// THIS PAGE IS A DEMO PAGE TO TEST DATABASE CONNECTIVITY

import * as React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import prisma from "~/lib/prisma";
import Image from "next/image.js";
import Link from "next/link";



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

function Scratchpage({ dbResponse }) {

  // console.log("INSIDE SCRATCHPAGE component: " + JSON.stringify(dbResponse));
  if (dbResponse.length != 0) { // i.e., the database returned something in dbResponse.
    return (
      <>
        <Head>
          <title>MyRentalCompass | Rights</title>
          <meta name="description" content="Know your rights as a renter." />
        </Head>

        <main className="font-inter flex flex-col h-screen">
          <Navbar activePage="Understand your rights" />

          <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

            {/* <div>scratchpage</div>
            <h1>{dbResponse[0].airport_name}</h1> */}
            {/*  */}
            <Box my="14px" bgcolor="#fff" width="80rem" borderRadius="10px" padding="10px" alignItems="left" sx={{ justifyContent: { sm: "center", lg: "space-between" } }}>
              <Grid container spacing={4}>
                <Grid item lg={2.5}>
                  <PreferencesBar></PreferencesBar>
                </Grid>
                <Grid item lg={9.5}>
                  {/* MAP COMPONENT GOES HERE */}
                  <Grid container spacing={4} flexDirection={"column"} justifyContent={"flex-end"} alignItems={"flex-end"}>
                    <Grid item>
                      <Image loader={ImageLoader}
                        src={"/liveable-cities.jpeg"}
                        width={1300}
                        height={100}
                        alt={"liveable-cities"}
                        loading="eager"
                        className="mx-auto" style={{ borderRadius: "14px" }}></Image>
                    </Grid>
                    <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end" }}>
                      <div className="flex flex-row m-4">
                        <div className="mt-auto flex pb-4 m-2">
                          <Link href={"/questionnaire"}>
                            <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
                              Start over
                            </button>
                          </Link>
                        </div>
                        <div className="mt-auto flex pb-4 m-2">
                          <Link href={"/"}>
                            <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
                              Home
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
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
          <title>MyRentalCompass | Rights</title>
          <meta name="description" content="Know your rights as a renter." />
        </Head>

        <main className="font-inter flex flex-col m-1 h-screen">
          <Navbar activePage="Understand your rights" />

          <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

            <div>NOT FOUND IN DATABASE</div>

          </section>
          <Footer />
        </main>
      </>
    );
  }
}

export default Scratchpage;
