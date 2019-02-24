import React from 'react';
import Firestore from "./Firestore";
import firebase, { firestore } from 'firebase';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            analyse: "Analyse Data",
            your_name: "",
            crush_1: "",
            crush_2: "",
            crush_3: "",
            crush_4: "",
            crush_5: ""
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
      e.preventDefault();
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("users").add({
        your_name: this.state.your_name,
        crush_1: this.state.crush_1,
        crush_2: this.state.crush_2,
        crush_3: this.state.crush_3,
        crush_4: this.state.crush_4,
        crush_5: this.state.crush_5
      });
      this.setState({
        your_name: "",
        crush_1: "",
        crush_2: "",
        crush_3: "",
        crush_4: "",
        crush_5: ""
      });
    };



    handleClick = () => {
      this.setState({
        analyse: this.state.crush_1 + ' likes you!'
      });
    }

    render() {
        return (
          <div className="wrapper">
            <form onSubmit={this.addUser}>
            <h3>LOVE</h3>
            <h1>Calculator</h1>
            <h4>Find out who likes you!</h4>
            <br />
            <input
              type="text"
              name="your_name"
              placeholder="Your Name"
              onChange={this.updateInput}
              value={this.state.your_name}
            />
            <input
              type="text"
              name="crush_1"
              placeholder="Crush 1"
              onChange={this.updateInput}
              value={this.state.crush_1}
            />
            <input
              type="text"
              name="crush_2"
              placeholder="Crush 2"
              onChange={this.updateInput}
              value={this.state.crush_2}
            />
            <input
              type="text"
              name="crush_3"
              placeholder="Crush 3"
              onChange={this.updateInput}
              value={this.state.crush_3}
            />
            <input
              type="text"
              name="crush_4"
              placeholder="Crush 4"
              onChange={this.updateInput}
              value={this.state.crush_4}
            />
            <input
              type="text"
              name="crush_5"
              placeholder="Crush 5"
              onChange={this.updateInput}
              value={this.state.crush_5}
            />
                      <button type="submit" className="submitbtn" onClick={this.handleClick}>{this.state.analyse}</button>
          </form>
        </div>
        );
    }
}

export default App;