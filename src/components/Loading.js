import React from "react";
import loader from "../assets/loader.svg";

export default function Loading() {
  return (
    <div className="loading_container">
      <img src={loader} alt="loader" />
    </div>
  );
}
