import "../Css/App.css";

import Login from "./Login";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import Test from "./Test";
import SplashScreen from "./SplashScreen";
import CreateAccount from "./CreateAccount";
import Start from "./Start";
import Home from "./Home";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="appp">
        {" "}
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />

          <Route path="/createaccount" element={<Login />} />

          <Route path="/splashscreen" element={<SplashScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
