import Navbar from "../Components/Navbar/Navbar";
import Container from "../Components/Navbar/Container";
import Product from "../Products/Product";
import Footer from "../Components/Footer/Footer";

export const dummy_data = [
  {
    id: 1,
    title: "nike Air 11",
    price: 3200,
    imageURL:
      "https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
  },
  {
    id: 2,
    title: "nike classic z1",
    price: 3200,
    imageURL:
      "https://images.pexels.com/photos/7524995/pexels-photo-7524995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
  },

  {
    id: 3,
    title: "nike confy Q1",
    price: 3200,
    imageURL:
      "https://images.pexels.com/photos/60735/pexels-photo-60735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
  },
  {
    id: 4,
    title: "nike wistle r2",
    price: 3200,
    imageURL:
      "https://images.pexels.com/photos/18946583/pexels-photo-18946583/free-photo-of-brand-design-sneaker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
  },
  {
    id: 5,
    title: "nike mangnum 2x",
    price: 3200,
    imageURL:
      "https://images.pexels.com/photos/8278491/pexels-photo-8278491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
  },
  {
    id: 6,
    title: "nike ultron px",
    price: 3200,
    imageURL:
      "https://images.pexels.com/photos/18946650/pexels-photo-18946650/free-photo-of-nike-air-max-1-97-sean-wotherspoon-shoes.jpeg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin aliquet, ipsum a bibendum ultricies, augue est fringilla dolor, id consequat urna libero vel lorem. Sed euismod risus non quam aliquet, ut facilisis elit dignissim. Integer sed justo at velit consequat convallis nec ut ipsum. Sed aliquam lacinia magna, quis molestie lorem convallis nec. Ut euismod, odio non suscipit faucibus, velit sapien commodo metus, sit amet tincidunt lectus elit id velit. Vivamus sed odio id dolor viverra fermentum. Pellentesque nec quam eu tortor aliquet suscipit. Nam auctor, massa nec consequat convallis, purus metus suscipit odio, in facilisis magna lorem nec justo.",
  },
];

const ProductsPage = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Container description="Shoe Gallery" />
      </header>
      <div className="products-container">
        <Product data={dummy_data} description="Add To Cart" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductsPage;
