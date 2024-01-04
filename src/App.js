import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create from "./Pages/Create";

import { useContext, useEffect } from "react";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ViewPost from "./Pages/ViewPost";
import Post from "./store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  // const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Signup />} exact path="/signup" />
            <Route element={<Login />} exact path="/login" />
            <Route element={<Create />} exact path="/create" />
            <Route element={<ViewPost />} exact path="/view" />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
