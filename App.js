import { PropTypes } from "prop-types";
import { useState } from "react";
import SearchBar from "./SearchBar.js";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import styles from "./App.module.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ hhh: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  //filter hasn't worked, rewatch TwT video
  const filteredData = (data1) => {
    const filterData = [];
    console.log(filters);
    console.log(data["hhh"]);
    if (!filters.name) {
      console.log(data1);
      return data1;
    }
    return filterData;
  };

  const addItemToData = (item) => {
    let items23 = data["hhh"];
    console.log(items23);
    items23.push(item);
    //open server with: json-server db.json
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json)
      .then(setData({ hhh: items23 }), console.log(data));

    //these two below override the same-named ones being created on the spot on ItemsDisplay.js
    item.id = items23.length;
    item.dune = "Atreides";
  };

  return (
    <div className={"container"}>
      {/* <SearchBar updateSearchParams={updateFilters} /> */}
      <div className="row mt-3"></div>
      <p className={styles.blue}>TESTTT</p>

      <div className="row mt-3">
        {/* callback below - used to pass info from child to parent. Check relevant screenshot */}
        <SearchBar callbackProp={updateFilters} getVal={updateFilters} />
      </div>

      <p className={styles.blue}>
        Name: {"name" in filters ? filters["name"] : "No data available"}{" "}
      </p>

      <p>
        Price: {"price" in filters ? filters["price"] : "No data available"}
      </p>

      <p>Type: {"type" in filters ? filters["type"] : "No data available"}</p>
      <p>
        Brand: {"brand" in filters ? filters["brand"] : "No data available"}
      </p>
      <div>
        <AddItem addItem={addItemToData} />
      </div>

      <div className="row mt-3">
        {/* I think the reason data displayed is not duplicated in every new 
        entry (regarding this line: <ItemsDisplay hhh={data["hhh"]}), 
        is because the whole object is re-rendered everytime I make a new entry, 
        instead of just the last "batch" */}
        <ItemsDisplay itemsA={filteredData(data["hhh"])} />
      </div>

      <TextExpand
        maxLength={32}
        text="This is a very long text for the purpose of understanding react's useState better"
      />
    </div>
  );
}

function TextExpand(props) {
  const [hidden, setHidden] = useState(false);

  if (props.text.length <= props.maxLength) {
    return <span>{props.text}</span>;
  }

  return (
    <span>
      {hidden ? props.text.substr(0, props.maxLength) : props.text}
      {hidden ? (
        <a onClick={() => setHidden(false)}>
          {" "}
          <strong>read more</strong>
        </a>
      ) : (
        <a onClick={() => setHidden(true)}>
          {" "}
          <strong>read less</strong>
        </a>
      )}
    </span>
  );
}

// AddItem.defaultProps = {
//   number: 10,
//   text: "default text",
// };

function DataDisplaying(props) {
  const Styled = styled.h2`
    color: ${(props) => (props.color ? props.color : "Green")};
  `;
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.count}</p>
      <p>{props.color}</p>
      <Styled>RAWR XD</Styled>
    </div>
  );
}

export default App;
