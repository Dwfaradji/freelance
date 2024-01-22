import React from "react";
import Home from "@/app/(src)/home/home";
import { MyProvider } from "@/context/Mycontext";
import { initialState, reducer } from "@/context/reducer";


const Page = () => {
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <main>

      </main>
    </MyProvider>
  );
};

export default Page;
