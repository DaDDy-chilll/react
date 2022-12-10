// import { Component } from "react";
import "./card.style.css";

const Card = ({ monster, className }) => {
  const { id, name, email } = monster;
  return (
    <div className={className} key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className={this.props.className} key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
export default Card;
