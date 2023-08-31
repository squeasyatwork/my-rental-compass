// THIS PAGE IS A DEMO PAGE TO TEST DATABASE CONNECTIVITY

import React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import prisma from "lib/prisma";

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

        <main className="font-inter flex flex-col m-1 h-screen">
          <Navbar activePage="Understand your rights" />

          <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

            <div>scratchpage</div>
            <h1>{dbResponse[0].airport_name}</h1>
            <br></br>
            <center>{dbResponse[0].airport_name}</center>
          </section>
        </main>
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
        </main>
      </>
    );
  }
}

export default Scratchpage;
