import React from "react";
import MainContainer from "./MainContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-black w-full h-full flex items-center justify-center py-20 px-60">
      <Toaster />
      <MainContainer />
    </div>
  );
}

export default App;
