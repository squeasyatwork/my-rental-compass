import React, { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";

export const getServerSideProps = async (context) => {
  if (context.query) {
    let contextQuery = context.query;
    let reqQuery = new URLSearchParams(contextQuery);

    const apiUrl = process.env.API_URL + "/api/liveablesuburbs?" + reqQuery;
    console.log("Constructed API URL:", apiUrl);

    let dbResponse = await fetch(apiUrl, { method: "GET" });

    console.log('DB Response:', dbResponse);

    if (dbResponse.ok && dbResponse.headers.get("content-type").includes("application/json")) {
      let rankedSuburbs = await dbResponse.json();
      console.log('Ranked Suburbs:', rankedSuburbs);
      return { props: { rankedSuburbs, contextQuery } };
    } else {
      console.error('Error fetching from API:', dbResponse.statusText);
      return { props: { rankedSuburbs: null, contextQuery: {} } };
    }
  }

  return { props: { rankedSuburbs: null, contextQuery: {} } };
};

export default function Recommendations({
  rankedSuburbs = [],
  contextQuery = {},
}) {
  const router = Router.useRouter();

  const [inputValues, setInputValues] = useState({
    rent: contextQuery.rentChoice || 50,
    affordability: contextQuery.affordabilityChoice || 3,
    transport: contextQuery.transportChoice || 3,
    park: contextQuery.parkChoice || 3,
    crime: contextQuery.crimeChoice || 3,
    road: contextQuery.roadChoice || 3,
    university: contextQuery.uniChoice || "",
  });

  useEffect(() => {
    console.log('Ranked Suburbs State:', rankedSuburbs);
  }, [rankedSuburbs]);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const sendInput = () => {
    router.push({
      pathname: "/recommendations",
      query: inputValues,
    });
  };

  return (
    <>
      <Head>
        <title>API Test Page</title>
      </Head>
      <main>
        <h1>Testing API Interaction</h1>

        <div>
          <h2>Inputs</h2>
          <input
            type="text"
            name="rent"
            value={inputValues.rent}
            onChange={handleInputChange}
            placeholder="Rent"
          />
          <button onClick={sendInput}>Send Input</button>
        </div>

        <div>
          <h2>Output</h2>
          {rankedSuburbs && rankedSuburbs.length > 0 ? (
            <pre>{JSON.stringify(rankedSuburbs, null, 2)}</pre>
          ) : (
            <p>No data received from API.</p>
          )}
        </div>
      </main>
    </>
  );
}
