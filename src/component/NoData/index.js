import React from "react";
import "./style.css";
const NoData = () => {
  return (
    <div className="noData">
      <h4 style={{ color: "#cc406d" }}>
        Oops...No Books found <span>🙏</span>
      </h4>
      <h6 style={{ color: "#1b105f" }}>Search another book</h6>
    </div>
  );
};

export default NoData;
