import React, { useEffect, useState } from "react";
import { func } from "prop-types";
import Loading from "./Loading";

function Shop({ addToCart }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("pickaxe");

  const apiKey = "cd4ceff4-1970c5ca-36d1c43a-7bb37743";
  const url = "https://fortniteapi.io/v2/items/list?lang=en";
  const fetchItems = async () => {
    const data = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const response = await data.json();

    setItems(response.items);
    // console.log(response.items);
    setLoading(false);
  };
  const handleClick = (e) => {
    setFilter(e.target.value);
  };
  const addHandler = (item) => {
    addToCart(item);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="shop">
      <div className="types">
        <button value="pickaxe" type="button" onClick={handleClick}>
          Pickaxes
        </button>
        <button value="glider" type="button" onClick={handleClick}>
          Gliders
        </button>
        <button value="backpack" type="button" onClick={handleClick}>
          Backpacks
        </button>
      </div>
      <div className="items">
        {loading ? (
          <Loading />
        ) : (
          items
            .filter((ele) => ele.type.id === filter)
            .filter((ele) => ele.price > 0)
            .splice(0, 20)
            .map((item) => (
              <div key={item.id} className="shop-item-wrapper">
                <img
                  className="shop-item-img"
                  src={item.images.icon}
                  alt={item.name}
                />
                <div className="shop-item-props">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <button
                    className="add-btn"
                    type="button"
                    onClick={() => addHandler(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}
Shop.propTypes = {
  addToCart: func.isRequired,
};
export default Shop;
