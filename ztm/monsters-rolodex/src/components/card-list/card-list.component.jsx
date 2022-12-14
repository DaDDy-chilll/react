// import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} className="card-container" />
      ))}
    </div>
  );
};

// class clardList extends Component {
//   render() {
//     console.log("render from cardlist");
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card monster={monster} className="card-container" />
//         ))}
//       </div>
//     );
//   }
// }

export default CardList;
