import React from "react";

const Loader = () => {
  return (
    <>
      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
