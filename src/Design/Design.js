import React from "react";
import Header from "./Layouts/Header";
import MainBanner from "./Layouts/MainBanner";
import Para1 from "./Layouts/Para1";
import Catogeries from "./Layouts/Catogeries";
import Para2 from "./Layouts/Para2";
import Samples from "./Layouts/Samples";
import Footer from "./Layouts/Footer";

export default function Design() {
  return (
    <div>
      <Header />
      <MainBanner />
      <Para1 />
      <Catogeries />
      <Para2 />
      <Samples />
      <Footer />
    </div>
  );
}
