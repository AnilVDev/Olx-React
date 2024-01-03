import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { useContext, useEffect } from "react";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const { setUser } = useContext(AuthContext);
  // const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Signup />} exact path="/signup" />
          <Route element={<Login />} exact path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
