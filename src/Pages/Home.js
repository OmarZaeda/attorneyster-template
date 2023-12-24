import React from "react";
import Landing from "../Component/Home/Landing";
import SimpleChoice from "../Component/Home/SimpleChoice";
import ExploreOurPractice from "../Component/Home/ExploreOurPractice";
import IfTrouble from "../Component/Home/IfTrouble";
import TopLawyers from "../Component/Home/TopLawyers";
import ClientReviews from "../Component/Home/ClientReviews";
import OurExperienced from "../Component/Home/OurExperienced";

const Home = () => {
  return (
    <>
      <Landing />
      <SimpleChoice />
      <ExploreOurPractice />
      <IfTrouble />
      <TopLawyers />
      <ClientReviews />
      <OurExperienced />
    </>
  );
};

export default Home;
