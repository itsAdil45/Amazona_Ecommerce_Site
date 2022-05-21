import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((item) => (
            <div className="product" key={item.slug}>
              <Link to={`/product/${item.slug}`}>
                <img src={item.image} alt="tshirt" />
              </Link>
              <div className="product-info">
                <Link to={`/product/${item.slug}`}>
                  <p>{item.name}</p>
                </Link>
                <p>
                  <strong>${item.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
