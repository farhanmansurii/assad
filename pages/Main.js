import React from "react";
import Featured from "../components/Featured";
import Hero from "../components/hero";
import Newsletter from "../components/Newsletter";
import Skills from "../components/Skills";
import Head from "next/head";
export default function Main() {
  return (
    <>
      {" "}
      <Head>
        <title>Farhan&apos;s Portfolio </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Skills />
      <Featured />
      <Newsletter />
    </>
  );
}
