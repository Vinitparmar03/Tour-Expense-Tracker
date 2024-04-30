import React from "react";
import "./NotFound.css";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <h1 className="not-found-title">404 - Not Found</h1>
        <p className="not-found-text">
          The page you're looking for does not exist.
        </p>
      </div>
    </>
  );
};

export default NotFound;
