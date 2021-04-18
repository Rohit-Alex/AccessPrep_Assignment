import React from "react";
import "./style.css";
import Loader from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Loading...Please Wait!</h4>
      <Loader
        className="threeDots"
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Loading;
