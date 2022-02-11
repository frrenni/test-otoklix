import axios from "axios";
import React, { Component } from "react";
import { Container, Form, Button, FormGroup, Input, Label } from "reactstrap";
import { BackComponent } from "../Components/BackComponent";

export default class CreateContainer extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Tambah Data</h1>
        <Form onSubmit={this.handlerSubmit}>
          <FormGroup className="mb-3">
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Title"
              id="title"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup className="mb-3">
            <Label>Content</Label>
            <Input
              type="text"
              placeholder="Content"
              id="content"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
