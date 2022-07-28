import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Instructions from "./component/Instructions";
import Main from "./component/Main";


function App() {
  const [div, setDiv] = useState(JSON.parse(localStorage.getItem("sortDiv")) || []);
  const [sortDiv, setSortDiv] = useState([]);

  const handleRemove = (id) => {
    setDiv(div.filter((el) => el.id !== id));
  };

  const sortHandler = () => {
    setSortDiv(div.sort((a, b) => a.number - b.number));
  };
  console.log(sortDiv);

  return (
    <div className="App">
      <div className="event">
        <Header
          onSort={sortHandler}
          onAdd={(state) => {
            setDiv([
              ...div,
              {
                id: Math.random(),
                number: Math.floor(Math.random() * 1000),
              },
            ]);
            localStorage.setItem("sortDiv", JSON.stringify(div));
          }}
        />
        <Main handleRemove={handleRemove} addDiv={div} />
        <Footer />
      </div>
      <div className="inst">
        <Instructions />
      </div>
    </div>
  );
}

export default App;
