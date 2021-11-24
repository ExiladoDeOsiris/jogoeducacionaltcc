import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
