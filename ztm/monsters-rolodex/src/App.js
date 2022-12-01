import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        {
          name: "Linda",
          id: "1a",
        },
        {
          name: "Frank",
          id: "2a",
        },
        {
          name: "Jacky",
          id: "3a",
        },
        {
          name: "DaDDy",
          id: "4a",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
