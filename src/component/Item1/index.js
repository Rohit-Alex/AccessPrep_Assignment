import React from "react";
import "./style.css";
const Item1 = ({ item, setModalOpen, setCurr }) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="card"
      onClick={() => {
        setModalOpen(true);
        setCurr(item);
      }}
    >
      <img className="img" src={`./image/${item.src}`} alt="Books" />
      <div className="details">
        <div>
          <h4> {truncate(item.title, 22)} </h4>
        </div>
        <div>
          <h5>{truncate(item.author, 22)} </h5>
        </div>
      </div>
      {/* <div className="description">
        <span>{truncate(item.volumeInfo.description, 300)}</span>
      </div> */}
    </div>
  );
};

export default Item1;
