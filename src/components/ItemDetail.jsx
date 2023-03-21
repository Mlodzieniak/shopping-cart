/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import { func } from "prop-types";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ReactComponent as AddIcon } from "./svg/box-svgrepo-com.svg";

function ItemDetail({ addToCart }) {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const apiKey = "cd4ceff4-1970c5ca-36d1c43a-7bb37743";
  const url = `https://fortniteapi.io/v2/items/get?id=${id}&lang=en`;
  const fetchItems = async () => {
    // console.log(match);
    const data = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    const response = await data.json();
    console.log(response.item);
    setDetails(response.item);
    setLoading(false);
  };

  const addHandler = (item) => {
    addToCart(item);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="item-details">
      {loading ? (
        <Loading />
      ) : (
        <div key={details.id} className="detail-wrapper">
          <Link to={`/shop/${details.type.id}s`}>
            <button type="button" className="back-btn">
              Go Back
            </button>
          </Link>

          <img
            className="detail-img"
            src={details.images.featured}
            alt={details.name}
          />
          <div className="detail-props">
            <div className="detail-info">
              <h3>{details.name}</h3>
              <p>{details.rarity.name}</p>
              <p>{details.description}</p>
              {details.set ? <p>{details.set.partOf}</p> : ""}
              <p>Available from: {details.releaseDate}</p>
              <p className="price">{details.price}</p>
            </div>

            <button
              className="add-btn"
              type="button"
              onClick={() => addHandler(details)}
            >
              <p>Add to Cart</p>
              <div className="add-icon">
                <AddIcon />
              </div>{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
ItemDetail.propTypes = {
  addToCart: func.isRequired,
  // id: any.isRequired,
};

export default ItemDetail;
