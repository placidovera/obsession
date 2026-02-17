import React from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";

const LeftRightWrapper = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-start">
        {/* Left ocupa 4 columnas */}
        <div className="col-12 col-md-8">
          <Left/>
        </div>

        {/* Right ocupa 8 columnas */}
        <div className="col-12 col-md-4 d-flex justify-content-end">
          <Right/>
        </div>
      </div>
    </div>
  );
};

export default LeftRightWrapper;
