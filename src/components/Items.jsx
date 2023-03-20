import React, { useState, useEffect } from "react";
import { func, string } from "prop-types";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { ReactComponent as AddIcon } from "./svg/box-svgrepo-com.svg";

function Items({ addToCart, itemType }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
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
    setLoading(false);
  };

  const addHandler = (item) => {
    addToCart(item);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="items">
      {loading ? (
        <Loading />
      ) : (
        items
          .filter((ele) => ele.type.id === itemType)
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
                <p className="price">{item.price}</p>
                <Link to={`/item/${item.id}`}>
                  <button className="info-btn" type="button">
                    <p>More Info</p>
                  </button>
                </Link>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => addHandler(item)}
                >
                  <p>Add to Cart</p>
                  <div className="add-icon">
                    <AddIcon />
                  </div>
                </button>
              </div>
            </div>
          ))
      )}
    </div>
  );
}
Items.propTypes = {
  addToCart: func.isRequired,
  itemType: string.isRequired,
};
export default Items;
