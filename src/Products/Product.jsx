import "./Products.css";
import ProductsCard from "../Components/ProductsCard/ProductsCard";
import AddToCartButton from "./AddToCartButton";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const productsArray = props.data.map((product, index) => (
    <NavLink key={index} to={`/product/${product.id}`} className="product-link">
    <ProductsCard key={index}>
      <div className="product">
        <img src={product.imageURL} alt={product.title} />
        <p>{product.title}</p>
        <p>Price: ${product.price}</p>
        <AddToCartButton
          item={product}
          id={product.id}
          description={props.description}
        />
      </div>
    </ProductsCard>
    </NavLink>
  ));

  return (
    
      <div className="products-container">{productsArray}</div>
  );
};

export default Products;
