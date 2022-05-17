import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import BangDiem from "./page/bangdiem";
import { Container } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <Container fluid>
        <div className="d-flex justify-content-between">
          <img
            src="http://ketoantc.mitc.edu.vn/wp-content/uploads/2022/05/z3421536934695_15b18c904c6013b28d07fff99becc7d8.jpg"
            className="logo"
            alt="logo game show"
          />
          <img
            src="http://ketoantc.mitc.edu.vn/file/2020/02/logo160-160.png"
            className="logo mt-2"
            alt="logo mitc"
          />
        </div>
      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bangdiem" element={<BangDiem />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
