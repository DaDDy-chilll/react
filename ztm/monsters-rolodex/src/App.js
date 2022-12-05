import { Component } from "react";

import "./App.css";
import ClardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      serchString: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monster: users };
        })
      );
  }
  onSearchChange = (event) => {
    const serchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { serchString };
    });
  };
  render() {
    const { monster, serchString } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(serchString);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Enter monster"
          className="search-box"
        />
        <ClardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
