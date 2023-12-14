import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Navbar/Container";
import Product from "../Products/Product";
import Footer from "../Components/Footer/Footer";

export const dummy_data = [
    { 
      // id: 1,
      title: "Shop For Men",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/19166244/pexels-photo-19166244/free-photo-of-man-hand-holding-shoes.jpeg",
    },
    { 
      // id:2,
      title: "Shop For Women",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/977908/pexels-photo-977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
    {
      // id:3,
      title: "Shop For Kids",
      price: 3200,
      imageURL:
        "https://images.pexels.com/photos/5623677/pexels-photo-5623677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

  ];

const Home = ()=>{

    return (
        <div>
          <header>
            <Navbar />
            <Container description = "This is ShopCop"/>
          </header>
          <div className="products-container">
          <Product data={dummy_data} description="Take A Tour"/>
          </div>
          <Footer></Footer>
        </div>
      )
}


export default Home;