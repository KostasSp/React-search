import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const [type1, setType] = useState("Dummy type");
  const [brand, setBrand] = useState("Dummy brand");

  const addItemButtonPressed = () => {
    console.log(props);
    props.addItem({
      name1: name,
      price: price,

      type: type1,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      {/* <div className="col"></div> */}
      <div className="col">
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="col-sm-12">
        <label htmlFor="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          className="form-control"
          value={price}
          onChange={(f) => setPrice(f.target.value)}
        ></input>
      </div>

      <div className="col">
        <label hmtlFor="type-field">Type8:</label>
        <input
          id="type-field"
          type="text"
          className="form-control"
          value={type1}
          onChange={(g) => setType(g.target.value)}
        ></input>
      </div>

      <div className="col">
        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          className="form-control"
          value={brand}
          onChange={(h) => setBrand(h.target.value)}
        ></input>
      </div>

      <div className="row mt-3">
        <div className="col-5"></div>
        <button
          type="button"
          className="col-2 btn btn-primary"
          onClick={addItemButtonPressed}
        >
          Add item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
