import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import ProductsPage, {dummy_data} from "./Pages/ProductsPage";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import SignUpForm from "./Components/Authentication/SignUpForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/ProductsPage",
    element: <ProductsPage />
  },
  {
    path: "/contact-us",
    element: <ContactUs />
  },
  {
    path: "/product/:id",
    element: <ProductDetails ProductsData = {dummy_data}/>
  },
  {
    path: "/sign-up",
    element:<SignUpForm/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
