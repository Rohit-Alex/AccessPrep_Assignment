import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Item from "./component/Item";
import Item1 from "./component/Item1";
// import data from "./MOCK_DATA (1).json";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Loading from "./component/Loading";
import NoData from "./component/NoData";
function App() {
  const [searchVal, setsearchVal] = useState("");
  const [obj, setObj] = useState([]);
  const [render, setRender] = useState(false);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=%22%27);"
        );
        setObj(res.data);
        setRender(true);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  if (render) {
    var filteredArray = obj.items.filter((item) => {
      if (searchVal === "") return item;
      else if (
        item.volumeInfo.title.toLowerCase().includes(searchVal?.toLowerCase())
      )
        return item;
    });
  }

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
                <h4>Books Title & Author</h4>
                <h4>Details</h4>
                <h4>Description</h4>
              </div>
              {render ? (
                filteredArray.length > 0 ? (
                  filteredArray.map((item) => (
                    <div>
                      <Item item={item} /> <hr />
                    </div>
                  ))
                ) : (
                  <NoData />
                )
              ) : (
                <Loading />
              )}
            </div>
          </Route>
          <Route exact path="/grid">
            <div className="con">
              <div className="head">
                <h1>Book Details...</h1>
              </div>
              <div className="body_grid">
                {render ? (
                  filteredArray.length > 0 ? (
                    filteredArray.map((item) => <Item1 item={item} />)
                  ) : (
                    <NoData />
                  )
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
