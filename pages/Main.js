import React from "react";
import Featured from "../components/Featured";
import Hero from "../components/hero";
import Newsletter from "../components/Newsletter";
import Skills from "../components/Skills";

export default function Main() {
  return (
    <>
      <Hero />
      <Skills />
      <Featured />
      <Newsletter />
    </>
  );
}
