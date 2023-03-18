import React, { useEffect, useState } from "react";

function Shop() {
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
    console.log(response.items);
    setItems(response.items);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="shop">
      {items
        .filter((ele) => ele.type.id === "pickaxe")
        .splice(0, 10)
        .map((item) => (
          <div key={item.id} className="name">
            <h3>{item.name}</h3>
            <img src={item.images.icon} alt={item.name} />
          </div>
        ))}
    </div>
  );
}

export default Shop;
