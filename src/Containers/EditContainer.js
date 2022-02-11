import React, { Component } from "react";
import { Container } from "reactstrap";
import { BackComponent } from "../Components/BackComponent";

export default class EditContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Edit Data</h1>
      </Container>
    );
  }
}
