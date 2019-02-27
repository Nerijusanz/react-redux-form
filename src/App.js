import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./App.css";
import LocationForm from "./components/forms/LocationForm";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={12}>
              <h1>App</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <LocationForm />
            </Col>
            <Col md={6}>.col-2</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
