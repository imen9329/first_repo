import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import MainForm from "./components/Main/MainForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <MainForm />
            </div>
        );
    }
}
export default App;
