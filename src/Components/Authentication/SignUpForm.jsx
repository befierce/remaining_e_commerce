import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./SignUpForm.css";
import { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";



const SignUpForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authctx = useContext(AuthContext)
  const [isLoggedInMode, setIsLoggedInMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const changeModeHandler = () => {
    setIsLoggedInMode((prev) => !prev);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if(isLoggedInMode){
      localStorage.setItem("userEmail",enteredEmail);
    }

    if (isLoggedInMode) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmTY8ac-zTqK5VYV24wPcGY4bXVjOwWDU";
      fetch("");
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmTY8ac-zTqK5VYV24wPcGY4bXVjOwWDU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      console.log("response after login or sign up",res);
      setIsLoading(false);
      if (res.ok && res.status === 200) {
        return res.json();
      } else {
        return res.json().then((data) => {
          const errorMessage = data.error.message;
          throw new Error(errorMessage);
        });
      }
    }).then((data)=>{
      authctx.login(data.idToken);
      navigate("/");
    })
    .catch((error)=>{
      alert(error);
    })
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    //   }
  };

  return (
    <>
      <Navbar />
      <div className="sign-up-body">
        <div className="sign-up-form-container">
          <div>
            <form
              onSubmit={formSubmitHandler}
              className="sign-up-form-container-box"
            >
              <label>Email</label>
              <input type="email" name="email" ref={emailInputRef} />
              <label>Password</label>
              <input type="tel" name="phone" ref={passwordInputRef} />
              {!isLoading && (
                <button type="submit">
                  {isLoggedInMode ? "LOG-IN" : "Sign Up"}
                </button>
              )}
              {isLoading && <p>Sending request....</p>}
              <Link onClick={changeModeHandler}>
                {isLoggedInMode ? "New user? Sign Up" : "Existing user? Login"}
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;