import React from "react";
import "./style.css";
const Item1 = ({ item }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="card">
      <img
        className="img"
        src={item.volumeInfo.imageLinks.thumbnail}
        alt="Books"
      />
      <div className="details">
        <div>
          <h4> {truncate(item.volumeInfo.title, 19)} </h4>
        </div>
        <div>
          <h5>{truncate(item.volumeInfo.authors[0], 19)} </h5>
        </div>
      </div>
      {/* <div className="description">
        <span>{truncate(item.volumeInfo.description, 300)}</span>
      </div> */}
    </div>
  );
};

export default Item1;
