import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// Using class components
class App extends Component {

  constructor() {
    super();

    this.state = {
      searchText: '',
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users };
        },
        () => { }
      ));
  }

  onSearchChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchText };
    }
    );
  };

  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          placeholder="Search Monsters"
          onSearchChange={onSearchChange}
        />
        <p></p>
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
};

export default App;
