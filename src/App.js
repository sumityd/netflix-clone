import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
