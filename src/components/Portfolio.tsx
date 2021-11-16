import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IWindowProps } from "./Interfaces";
import Heidi from "../assets/Heidi.jpg";
import Wave from "../assets/WaveGrey.svg";
import Desperation from "../assets/Desperation.jpg";
import Imprisoned from "../assets/Imprisoned.jpg";
import Cloak from "../assets/Cloak.jpg";
import Smoke from "../assets/Smoke.jpg";
import Blindfolded from "../assets/BlindFolded.jpg";
import Wet from "../assets/Wet.jpg";
import Lake from "../assets/Lake.jpg";
import Model from "../assets/Model.jpg";

function Portfolio(props: IWindowProps): JSX.Element {
  return (
    <Container
      fluid
      className=" p-0 text-center m-0 px-3 position-relative"
      style={{
        fontFamily: '"Cormorant", serif',
        backgroundColor: "#f8f9fa",
      }}
      id="Portfolio"
    >
      <Container fluid className="p-0 text-center text-dark pb-3">
        <h3>
          <b>P O R T F O L I O</b>
        </h3>
      </Container>

      <div className="d-flex row justify-content-around pb-2">
        <div
          className="d-flex row justify-content-center"
          style={{ width: "25%" }}
        >
          <img src={Wet} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
        <div
          className="d-flex row justify-content-center"
          style={{ width: "25%" }}
        >
          <img src={Smoke} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
        <div
          className="d-flex row justify-content-center"
          style={{ width: "25%" }}
        >
          <img src={Desperation} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
        <div
          className="d-flex row justify-content-center"
          style={{ width: "25%" }}
        >
          <img src={Imprisoned} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
      </div>

      <div className="d-flex row justify-content-around">
        <div
          className="d-flex row justify-content-center"
          style={{ width: "25%" }}
        >
          <img src={Cloak} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
        <div
          style={{ width: "50%" }}
          className="d-flex row justify-content-center"
        >
          <img src={Heidi} style={{ maxWidth: "83%", padding: "0px" }} />
        </div>
        <div
          className="d-flex row justify-content-center"
          style={{ width: "25%" }}
        >
          <img src={Model} style={{ maxWidth: "100%", padding: "0px" }} />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "calc(100vw * 128 / 1440)",
        }}
      ></div>
      <img
        src={Wave}
        className="w-100 position-absolute bottom-0 start-0 p-0"
      ></img>
    </Container>
  );
}

export default Portfolio;
