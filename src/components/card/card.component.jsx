// import { Component } from 'react';
import './card.styles.css'

// class Card extends Component {
//     render() {
//         const { name, id, email } = this.props.monster;

//         return (
//             <div className='card-container' key={id}>
//                 <img
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id + 20}?set=set2&size=180x180`}
//                 />
//                 <h2> {name} </h2>
//                 <p> {email} </p>
//             </div>
//         );
//     }
// }


// using functional components
const Card = (props, forwardedRef) => {

    const { name, id, email } = props.monster;

    return (
        <div className='card-container' key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id + 20}?set=set2&size=180x180`}
            />
            <h2> {name} </h2>
            <p> {email} </p>
        </div>);
}
export default Card;