// import { useCallback, useEffect, useState } from "react";
// import "./App.css";
// import Header from "./component/Header";
// import Item from "./component/Item";
// import Item1 from "./component/Item1";
// import data from "./bookApi.json";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";
// import Loading from "./component/Loading";
// import NoData from "./component/NoData";
// function App() {
//   const [searchVal, setsearchVal] = useState("");
//   const [obj, setObj] = useState([]);
//   const [render, setRender] = useState(false);
//   const [mode, setMode] = useState("light");
//   // console.log(data);
//   useEffect(() => {
//     async function getData() {
//       try {
//         const res = await axios.get(
//           "https://www.googleapis.com/books/v1/volumes?q=%22%27);"
//         );
//         setObj(res.data);
//         setRender(true);
//         console.log(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     getData();
//   }, []);

//   if (render) {
//     var filteredArray = obj.items.filter((item) => {
//       if (searchVal === "") return item;
//       else if (
//         item.volumeInfo.title.toLowerCase().includes(searchVal?.toLowerCase())
//       )
//         return item;
//     });
//   }

//   return (
//     <div className={`${mode === "light" ? "App" : "App_Dark"}`}>
//       <BrowserRouter>
//         <Header mode={mode} setMode={setMode} setsearchVal={setsearchVal} />
//         <Switch>
//           <Route exact path="/">
//             <div className="body">
//               <div className="head">
//                 <h1>Book Details...</h1>
//               </div>

//               <div className="sub_head">
//                 <h4>Books Title & Author</h4>
//                 <h4>Details</h4>
//                 <h4>Description</h4>
//               </div>
//               {render ? (
//                 filteredArray.length > 0 ? (
//                   filteredArray.map((item) => (
//                     <div>
//                       <Item item={item} /> <hr />
//                     </div>
//                   ))
//                 ) : (
//                   <NoData />
//                 )
//               ) : (
//                 <Loading />
//               )}
//             </div>
//           </Route>
//           <Route exact path="/grid">
//             <div className="con">
//               <div className="head">
//                 <h1>Book Details...</h1>
//               </div>
//               <div className="body_grid">
//                 {render ? (
//                   filteredArray.length > 0 ? (
//                     filteredArray.map((item) => <Item1 item={item} />)
//                   ) : (
//                     <NoData />
//                   )
//                 ) : (
//                   <Loading />
//                 )}
//               </div>
//             </div>
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Item from "./component/Item";
import Item1 from "./component/Item1";
import data from "./bookApi.json";
import Modal from "react-modal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";
// Modal.setAppElement("#root");
import NoData from "./component/NoData";
function App() {
  const [searchVal, setsearchVal] = useState("");
  // const [obj, setObj] = useState([]);

  const [mode, setMode] = useState("light");
  const [modalOpen, setModalOpen] = useState(false);
  const [curr, setCurr] = useState(null);
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await axios.get(
  //         "https://www.googleapis.com/books/v1/volumes?q=%22%27);"
  //       );
  //       setObj(res.data);
  //       setRender(true);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getData();
  // }, []);

  var filteredArray = data.filter((item) => {
    if (searchVal === "") return item;
    else if (item.title.toLowerCase().includes(searchVal?.toLowerCase()))
      return item;
  });

  return (
    <div className={`${mode === "light" ? "App" : "App_Dark"}`}>
      <BrowserRouter>
        <Header mode={mode} setMode={setMode} setsearchVal={setsearchVal} />
        <Switch>
          <Route exact path="/">
            <div className="body">
              <div className="head">
                <h1>Book Details...</h1>
              </div>
              <div className="sub_head">
                <h4 className="book_name">Books Title & Author</h4>
                <h4 className="genre">Genre</h4>
                <h4 className="reading_progress">Reading Progress</h4>
                <h4 className="last_opened">Last Opened</h4>
              </div>
              <hr />
              {filteredArray.length > 0 ? (
                filteredArray.map((item) => (
                  <div>
                    <Item
                      item={item}
                      setModalOpen={setModalOpen}
                      setCurr={setCurr}
                    />{" "}
                    <hr />
                  </div>
                ))
              ) : (
                <NoData />
              )}
            </div>
          </Route>
          <Route exact path="/grid">
            <div className="con">
              <div className="head_grid">
                <h1>Book Details...</h1>
              </div>
              <div className="body_grid">
                {filteredArray.length > 0 ? (
                  filteredArray.map((item) => (
                    <Item1
                      item={item}
                      setModalOpen={setModalOpen}
                      setCurr={setCurr}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </div>
            </div>
          </Route>
        </Switch>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={{
            overlay: {},
            content: {
              position: "absolute",
              top: 200,
              left: 300,
              height: 400,
              width: 600,
              backgroundColor: "rgb(205 154 171)",
            },
          }}
        >
          <div className="modal_cont">
            <h4>Book Title : </h4>
            <div>{curr?.title}</div>
            <h4>Author :</h4>
            <div>{curr?.author}</div>
            <h4>Description :</h4>
            <div>{curr?.description}</div>
          </div>
          <br />
          <button className="modal_btn" onClick={() => setModalOpen(false)}>
            Close
          </button>
        </Modal>
      </BrowserRouter>
    </div>
  );
}

export default App;
