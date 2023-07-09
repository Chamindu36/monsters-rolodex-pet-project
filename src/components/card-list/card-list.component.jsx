// import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

// class CardList extends Component {

//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list" key="list">
//         {monsters.map((monster) => {
//           return (
//             <Card monster={monster} />
//           )
//         })}
//       </div>
//     );
//   }
// };

// using functional components
const CardList = ({ monsters }) => {

  return (
    <div className="card-list" key="list">
      {monsters.map((monster) => {
        return (
          <Card monster={monster} />
        )
      })}
    </div>
  );
};

export default CardList;