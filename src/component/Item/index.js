// import React from "react";
// import "./style.css";
// const Item = ({ item }) => {
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }
//   return (
//     <div className="container">
//       <div className="imgCont">
//         <img
//           src={item.volumeInfo.imageLinks.thumbnail}
//           alt="book"
//           className="image"
//         />
//         <div className="details">
//           <div className="title">
//             <strong>{item.volumeInfo.title}</strong>
//           </div>
//           <div className="author">{item.volumeInfo.authors[0]}</div>
//         </div>
//       </div>
//       <div className="subDetails">
//         <div className="genre">Adventure</div>
//         <div className="reading progress">100%</div>
//         <div className="last">2 days ago</div>
//       </div>
//       <div className="description">
//         <div>{truncate(item.volumeInfo.description, 300)}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;
import React from "react";
import "./style.css";
const Item = ({ item, setModalOpen, setCurr }) => {
  return (
    <div
      className="container"
      onClick={() => {
        setModalOpen(true);
        setCurr(item);
      }}
    >
      <div className="imgCont">
        <img src={`./image/${item.src}`} alt="book" className="image" />
        <div className="details">
          <div className="title">
            <strong>{item.title}</strong>
          </div>
          <div className="author">{item.author}</div>
        </div>
      </div>

      <div className="genre">{item.genre}</div>
      <div className="reading progress">{item.progress}</div>
      <div className="last">{item.last_opened}</div>
    </div>
  );
};

export default Item;
