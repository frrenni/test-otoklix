import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../Components/BackComponent";

export default class DetailContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Detail Data</h1>
      </Container>
    );
  }
}
