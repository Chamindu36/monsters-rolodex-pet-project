import { ChangeEventHandler } from 'react';

import './search-box.styles.css';


type ISearchBoxProps = {
    className: string;
    onSearchChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
};

// usng functional components
const SearchBox = ({ 
    className, 
    onSearchChange,
    placeholder }: ISearchBoxProps) => {
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