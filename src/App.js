import React, { Component } from "react";

import "./App.css";
import AutoCompleteText from "./AutoCompleteText";
import countries from "./countries";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <div className=" App=Componenet" />
          <AutoCompleteText items={countries} />
        </div>
      </div>
    );
  }
}

export default App;
