// import { Component } from 'react';
import './search-box.styles.css';

// class SearchBox extends Component {

//     render() {
//         const { className, onSearchChange, placeholder } = this.props;

//         return (
//             <div className="search-box-div">
//                 <input className={className}
//                     type='search'
//                     placeholder={placeholder}
//                     onChange={onSearchChange}
//                 />
//             </div>
//         );
//     }
// }

// usng functional components
const SearchBox = ({ className, onSearchChange, placeholder }) => {
    return (
        <div className="search-box-div">
            <input className={className}
                type='search'
                placeholder={placeholder}
                onChange={onSearchChange}
            />
        </div>
    );
};


export default SearchBox;