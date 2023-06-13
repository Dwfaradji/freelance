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

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result, "result");
  };
  onSubmit(data).then(r => console.log(r));

  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;
