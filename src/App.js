import React from "react";
import MainContainer from "./MainContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-black w-full h-full flex items-center justify-center py-20 px-60">
      <Toaster />
      <MainContainer />
      <div className="fixed left-4 bottom-4 text-sm">
        Created for Computing Theory | Assignment 1 2023 S2
      </div>
      <div className="fixed right-4 bottom-4 text-sm">
        Dylan Khan s3916841@student.rmit.edu.au
      </div>
    </div>
  );
}

export default App;
