import React, { Component } from "react";
import { Container } from "reactstrap";
import { TableComponent } from "../Components/TableComponent";
import axios from "axios";

export default class DataContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("https://limitless-forest-49003.herokuapp.com/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        this.setState({ data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <TableComponent data={this.state.data} />
      </Container>
    );
  }
}
