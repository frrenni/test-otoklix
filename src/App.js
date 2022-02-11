import React, { Component } from "react";
import NavbarComponent from "./Components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataContainer from "./Containers/DataContainer";
import CreateContainer from "./Containers/CreateContainer";
import EditContainer from "./Containers/EditContainer";
import DetailContainer from "./Containers/DetailContainer";

export default class App extends Component {
  state = {
    judul: "Otoklix",
  };

  render() {
    return (
      <div>
        <NavbarComponent judul={this.state.judul} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DataContainer />}></Route>
            <Route path="/create" element={<CreateContainer />}></Route>
            <Route path="/detail/:id" element={<DetailContainer />}></Route>
            <Route path="/edit/:id" element={<EditContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
