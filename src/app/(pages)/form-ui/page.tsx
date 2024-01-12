"use client";
import React, { useState } from "react";
import SiteVitrine from "@/components/sections/siteVitrine/siteVitrine";

interface Colors {
  Principal: string;
  Secondaire: string;
  Texte: string;
}

const Page = () => {
  return (
    <div>
      <SiteVitrine />
    </div>
  );
};

export default Page;
