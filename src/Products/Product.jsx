import "./Products.css";
import ProductsCard from "../Components/ProductsCard/ProductsCard";
import AddToCartButton from "./AddToCartButton";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const productsArray = props.data.map((product, index) => (
    <ProductsCard key={index}>
      <div className="product">
        <NavLink to={`/product/${product.id}`} className="product-link">
          <img src={product.imageURL} alt={product.title} />
          <p>{product.title}</p>
        </NavLink>
        <p>Price: ${product.price}</p>
        <AddToCartButton
          item={product}
          id={product.id}
          description={props.description}
        />
      </div>
    </ProductsCard>
  ));

  return (
    <div className="products-container">{productsArray}</div>
  );
};

export default Products;
