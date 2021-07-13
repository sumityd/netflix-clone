import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignUp.css";

export default function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const singIn = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="singup">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={singIn}>
          SignIn
        </button>
        <h4>
          <span style={{ color: "grey" }}>New to Netflix? </span>
          <span className="signup__line" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
