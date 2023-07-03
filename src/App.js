import { Component } from 'react';
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
        () => {
          console.log(this.state);
        }
      ));
  }



  render() {

    console.log("Render funvtion of App.js file is executing...");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchText);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters'
          onChange={
            (event) => {
              const searchText = event.target.value.toLowerCase();
              this.setState(() => {
                return { searchText };
              }
              );
            }
          }
        />
        {
          filteredMonsters.map((monster) => {
            return <h2 key={monster.id}> {monster.name} </h2>
          })
        }
      </div>
    );
  }
};

// Using functional components

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
