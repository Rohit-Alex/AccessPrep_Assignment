import React from "react";
import "./style.css";
const Subhead = () => {
  return (
    <>
      <div className="sub_head">
        <h4 className="book_name">Books Title & Author</h4>
        <h4 className="genre">Genre</h4>
        <h4 className="reading_progress">Reading Progress</h4>
        <h4 className="last_opened">Last Opened</h4>
      </div>
      <hr />
    </>
  );
};

export default Subhead;
