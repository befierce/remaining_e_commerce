import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";
import { useState } from "react";

// const data = {
//   id: 1,
//   title: "nike Air 11",
//   price: 3200,
//   imageURL:
//     "https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   details:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
// };
const ProductDetailsPage = (props) => {
  const {id} = useParams();
  const foundProduct = props.ProductsData.find((prod)=>
    prod.id === parseInt(id)
  )
  console.log("foundProduct",foundProduct)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="container_for_image_and_product_details">
        <div
          className="product_images_container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={isHovered ? "image-zoom-hovered" : "image-zoom"}>
            <img src={foundProduct.imageURL} alt="productimage"></img>
          </div>
        </div>
        <div className="details_of_product">
          <div className="title">{foundProduct.title}</div>
          <div className="details">{foundProduct.details}</div>
          <button className="add-to-cart">Add To Cart</button>
        </div>
        
      </div>
      <div className="reviews_of_product"></div>
    </>
  );
};

export default ProductDetailsPage;
