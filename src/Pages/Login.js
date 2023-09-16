import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import logo from "../images/logo.svg";
import logo2 from "../images/Mindray_s_logo.png";
import "./Login.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    if (Cookies.get("login")) {
      window.location.href = "/";
    }
  }, []);

  const medcin = {
    nom: "AOmar-23",
    password: "medcin",
  };

  const bio = {
    nom: "WYoussfi-95",
    password: "bio",
  };

  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  
  const hundleLogin = () => {
    if (nom === medcin.nom && password === medcin.password) {
      Cookies.set("login", "medcin");
      window.location.href = "/";
    } else if (nom === bio.nom && password === bio.password) {
      Cookies.set("login", "bio");
      window.location.href = "/";
    } else {
      alert("nom ou mot de passe incorrect");
    }
  };
  
  return (
    <MDBContainer fluid className="p-4" id="loginMain">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <img src={logo} alt="logo" id="logoLogin" />
          <img src={logo2} alt="logo2" id="logoLogin2" />
        </MDBCol>

        <MDBCol md="6" id="loginForm">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                label="Login"
                id="form1"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="btn btn-primary"
                onClick={hundleLogin}
              >
                Log in
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
