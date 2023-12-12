// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Example import statements in another file (e.g., App.js)
import Login from "./components/login"; // Adjust the path based on your structure
import Navbar from "./components/Navbar"; // Adjust the path based on your structure
import Registration from "./components/Registration";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";



const App = () => {

  return (
    <>
      <Router>
        <Navbar />

        <div className="container my-3">
          <Routes>
            {<Route exact path="/" element={<Login />}></Route>}
            {
              <Route
                exact
                path="/registration"
                element={<Registration />}
              ></Route>
            }
             <Route path="/Home" element={<Home />} />
             <Route path="/Gallery" element={<Gallery />} /> {/* Add this line */}
             <Route path="/About" element={<About />} /> {/* Add this line */}
            {<Route exact path="/login" element={<Login />}></Route>}
            {/* {<Route exact path="/contact" element={<Contact />}></Route>} */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
