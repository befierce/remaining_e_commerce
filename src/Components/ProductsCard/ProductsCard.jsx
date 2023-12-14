
import "./ProductCard.css"



const ProductsCard = (props) => {
    return <div className="productsCard">
            {props.children}
    </div>
}
 
export default ProductsCard;