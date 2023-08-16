import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Layout } from "./components/Layout";
import { Banner } from "./components/Banner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Layout>
      <Banner />
    </Layout>
  </React.StrictMode>
);
