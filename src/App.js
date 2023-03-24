import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={12} sm={12} lg={6} >
          <Button variant="danger">
            button
          </Button>
        </Col>
        <Col xs={12} sm={12} lg={6} >
          <Button variant="primary">
            button
          </Button>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
