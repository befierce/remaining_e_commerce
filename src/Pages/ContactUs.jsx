import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import "./ContactUs.css";

const ContactUs = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneNumberChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const contactFormSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      number: number,
    };

    const response = await fetch(
      "https://react-e-commerce-4534f-default-rtdb.firebaseio.com/user-contact-database.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("submitted");
      setName("");
      setEmail("");
      setNumber("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-us-body">
        <div className="contact-us-form-container">
          <div>
            <form
              onSubmit={contactFormSubmitHandler}
              className="contact-us-form-container-box"
            >
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={nameChangeHandler}
                name="name"
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={emailChangeHandler}
                name="email"
              />
              <label>Phone No.</label>
              <input
                type="tel"
                value={number}
                onChange={phoneNumberChangeHandler}
                name="phone"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
