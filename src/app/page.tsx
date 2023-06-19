import React from "react";
import Home from "@/app/Home/Home";
import "./Styles/globals.scss";
import handle from "@/app/api/database";
import { NextResponse } from "next/server";

const res = NextResponse;
const req = Request;

export async function dataBase() {
  return await handle(req, res);
}

dataBase();
const Page: React.FC = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;
