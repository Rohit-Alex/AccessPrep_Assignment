import React from "react";
import Loader from "react-loader-spinner";

import "./style.css";
const NoData = () => {
  return (
    <div className="noData">
      <h4 style={{ color: "#cc406d" }}>
        Oops...No Books found <span>🙏</span>
      </h4>
      <h6 style={{ color: "rgb(185 88 194)" }}>Search another book</h6>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default NoData;
