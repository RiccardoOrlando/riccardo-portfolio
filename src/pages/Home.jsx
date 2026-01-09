import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero"; // Usiamo il componente dedicato!
import StatsCards from "../components/StatsCard";
import SplitScreen from "../components/SplitScreen";
import VideoSplitScreen from "../components/VideoSplitScreen";
import PartnerSlider from "../components/PartnerSlider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero /> 
      <PartnerSlider />
      <StatsCards />
      <SplitScreen />
      <VideoSplitScreen />
      <Footer />
    </>
  );
}