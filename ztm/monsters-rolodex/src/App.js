// import { Component } from "react";

import { useState, useEffect } from "react";
import "./App.css";
import ClardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [serchString, setSearchString] = useState("");
  const [title, setTitle] = useState("");
  const [monster, setMonster] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monster);

  const onSearchChange = (event) => {
    const serchFieldString = event.target.value.toLowerCase();
    setSearchString(serchFieldString);
  };
  const onTitleChange = (event) => {
    const serchFieldString = event.target.value.toLowerCase();
    setTitle(serchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonster(users));
  }, []);

  useEffect(() => {
    const newFilterMonsters = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(serchString);
    });
    setFilterMonsters(newFilterMonsters);
  }, [monster, serchString]);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Enter monster"
        className="search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="set title"
        className="title-search-box"
      />
      <ClardList monsters={filterMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       serchString: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monster: users };
//         })
//       );
//   }
//   onSearchChange = (event) => {
//     const serchString = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { serchString };
//     });
//   };
//   render() {
//     const { monster, serchString } = this.state;
//     const { onSearchChange } = this;
//     const filterMonsters = monster.filter((monster) => {
//       return monster.name.toLowerCase().includes(serchString);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Enter monster"
//           className="search-box"
//         />
//         <ClardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
