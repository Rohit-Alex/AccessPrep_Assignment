import "./App.css";
import Header from "./component/Header";
import Item from "./component/Item";
import Item1 from "./component/Item1";
import data from "./bookApi.json";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";
// Modal.setAppElement("#root");
import NoData from "./component/NoData";
import Subhead from "./component/Subhead";
import Popup from "./component/Popup";
import { useState } from "react";
function App() {
  const [searchVal, setsearchVal] = useState("");
  // const [obj, setObj] = useState([]);

  const [mode, setMode] = useState("light");
  const [modalOpen, setModalOpen] = useState(false);
  const [curr, setCurr] = useState(null);
  const [grid, setGrid] = useState(false);
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
        <Header
          mode={mode}
          setMode={setMode}
          setsearchVal={setsearchVal}
          setGrid={setGrid}
        />
        <div className="head">
          <h1>Book Details...</h1>
        </div>
        <div className={`${!grid ? "body" : "body_grid"}`}>
          {!grid && <Subhead />}
          {filteredArray.length > 0 ? (
            filteredArray.map((item) => (
              <div>
                <Switch>
                  <Route exact path="/">
                    <Item
                      item={item}
                      setModalOpen={setModalOpen}
                      setCurr={setCurr}
                    />
                    <hr />
                  </Route>
                  <Route exact path="/grid">
                    <Item1
                      item={item}
                      setModalOpen={setModalOpen}
                      setCurr={setCurr}
                    />
                  </Route>
                </Switch>
              </div>
            ))
          ) : (
            <NoData />
          )}
        </div>
        <Popup curr={curr} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </BrowserRouter>
    </div>
  );
}
export default App;
