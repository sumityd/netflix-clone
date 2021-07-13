import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import "./Login.css";

export default function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="Netflix Logo"
        />
        <button onClick={() => setSignIn(true)} className="login__button">
          Sign In
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getstarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
