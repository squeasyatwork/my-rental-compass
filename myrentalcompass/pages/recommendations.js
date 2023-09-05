import * as React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
// import Mapone from "~/components/mapone.js";
import PreferencesBar from "~/components/PreferencesBar";

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

    return { props: { dbResponse } };
}

function Recommendations({ dbResponse }) {

  return (
    <>
      <Head>
        <title>MyRentalCompass | Explore the Map</title>
        <meta name="description" content="Discover potential suburbs." />
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
      </main>
    </>
  );
}

export default Recommendations;
