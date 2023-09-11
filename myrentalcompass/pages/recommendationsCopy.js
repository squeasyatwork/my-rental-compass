"use client";

import * as React from "react";
import Router from "next/router";
import { Box, Button, TextField } from "@mui/material";
import Head from "next/head";

import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";

export const config = {
  runtime: "nodejs",
};

export const getServerSideProps = async (context) => {
  if (context.query) {
    let contextQuery = context.query;
    let reqQuery = new URLSearchParams(contextQuery);

    let dbResponse = await fetch(
      process.env.API_URL + "/api/liveablesuburbs?" + reqQuery,
      {
        method: "GET",
      }
    );
    let rankedSuburbs = await dbResponse.json();

    return { props: { rankedSuburbs, contextQuery } };
  }

  let dummyReturnValue = null;
  return { props: { dummyReturnValue } };
};

function Recommendations({ rankedSuburbs = null, contextQuery = {} }) {
  const router = Router.useRouter();

  const [inputValues, setInputValues] = React.useState({
    rent: contextQuery.rentChoice || "",
    affordability: contextQuery.affordabilityChoice || "",
    transport: contextQuery.transportChoice || "",
    park: contextQuery.parkChoice || "",
    crime: contextQuery.crimeChoice || "",
    road: contextQuery.roadChoice || "",
    university: contextQuery.uniChoice || "",
  });

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const sendInput = () => {
    router.push({
      pathname: "/recommendationsCopy", // Updated pathname to reroute to /recommendationsCopy
      query: inputValues,
    });
  };

  return (
    <>
      <Head>
        <title>MyRentalCompass | Recommendations</title>
        <meta name="description" content="Discover potential suburbs." />
      </Head>
      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="Find where to live" />
        <section className="flex-grow w-full bg-ResourceButtonYellow flex items-center justify-center text-NavTextGray">
          <Box
            my="14px"
            bgcolor="#fff"
            borderRadius="10px"
            padding="10px"
            sx={{ display: "flex", flexDirection: "column", width: "80%" }}
          >
            <TextField
              name="rent"
              label="Rent"
              variant="outlined"
              value={inputValues.rent}
              onChange={handleInputChange}
            />
            <TextField
              name="affordability"
              label="Affordability"
              variant="outlined"
              value={inputValues.affordability}
              onChange={handleInputChange}
            />
            <TextField
              name="transport"
              label="Public Transport"
              variant="outlined"
              value={inputValues.transport}
              onChange={handleInputChange}
            />
            <TextField
              name="park"
              label="Parks"
              variant="outlined"
              value={inputValues.park}
              onChange={handleInputChange}
            />
            <TextField
              name="crime"
              label="Crime Rate"
              variant="outlined"
              value={inputValues.crime}
              onChange={handleInputChange}
            />
            <TextField
              name="road"
              label="Safety Roads"
              variant="outlined"
              value={inputValues.road}
              onChange={handleInputChange}
            />
            <TextField
              name="university"
              label="University"
              variant="outlined"
              value={inputValues.university}
              onChange={handleInputChange}
            />

            <Button onClick={sendInput}>Get Recommendations</Button>

            {rankedSuburbs && rankedSuburbs.length !== 0 && (
              <ol>
                {rankedSuburbs.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item.suburb}, {item.liveability_score}%
                  </li>
                ))}
              </ol>
            )}
            {rankedSuburbs && rankedSuburbs.length === 0 && (
              <h3>NO SUBURBS MATCHED</h3>
            )}
          </Box>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Recommendations;
