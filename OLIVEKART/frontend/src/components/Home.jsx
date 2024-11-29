//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";

const Home = () => {
  //const { items, status } = useSelector(state => state.products)
  // eslint-disable-next-line
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  //const history = useHistory()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    //history.push("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured.. </p>
      ) : (
        <>
          <h2>Our Products</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">INR{product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
  //return ( <h2>Home</h2> );
};

export default Home;