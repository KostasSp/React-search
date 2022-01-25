import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const [type, setType] = useState();
  const [brand, setBrand] = useState();

  const pressedSearchButton = () => {
    props.callbackProp({
      price: price,
      name: name,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container-fluid">
      <div className="col">
        <h2>Search for an item!</h2>
      </div>
      {/* <div className="row"></div> */}
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="price-field">Price:</label>
          <input
            id="price-field"
            type="number"
            value={price}
            onChange={(f) => setPrice(f.target.value)}
          ></input>
        </div>

        <div className="col">
          <label hmtlFor="type-field">Type:</label>
          <input
            id="type-field"
            type="text"
            value={type}
            onChange={(g) => setType(g.target.value)}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            id="brand-field"
            type="text"
            value={brand}
            onChange={(h) => setBrand(h.target.value)}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4"></div>
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={pressedSearchButton}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
