import React, { Component } from "react";
import { Container, Row, Col, ButtonToolbar, Button } from "react-bootstrap";

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
            <Col md={6}>
              <ButtonToolbar>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-danger">Danger</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-light">Light</Button>
                <Button variant="outline-dark">Dark</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
