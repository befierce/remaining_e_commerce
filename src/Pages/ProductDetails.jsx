import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProductDetailsPage from "./ProductDetailsPage";


const ProductDetails = (props) => {
  const { id } = useParams(); // Retrieve the id parameter from the URL

  return (
    <div>
      <Navbar />
      <ProductDetailsPage id={id} ProductsData={props.ProductsData}/>
      <Footer />
    </div>
  );
};

export default ProductDetails;
