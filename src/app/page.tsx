import React from "react";
import Home from "@/app/Home/Home";
import "./Styles/globals.scss";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  content: string;
}

const Page: React.FC = () => {
  const data = {
    firstname: "test",
    lastname: "test",
    email: "test",
    content: "test",
    // file: null,
  };

  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;
