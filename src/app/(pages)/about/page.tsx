"use client";
import React from "react";
import AboutHeader from "@/components/About/aboutHeader";
import AboutMore from "@/components/About/aboutMore";
import AboutTeamBigCard from "@/components/About/aboutTeamBigCard";
import AboutGrid from "@/components/About/aboutGrid";

const Page = () => {
  return (
    <main>
      <AboutHeader />
      <AboutMore />
      <AboutTeamBigCard />
      <AboutGrid />
    </main>
  );
};

export default Page;
