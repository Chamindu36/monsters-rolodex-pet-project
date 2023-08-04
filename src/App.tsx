import { useEffect, useState, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchText, setSearchTest] = useState<string>('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTextString = event.target.value.toLowerCase();
    setSearchTest(searchTextString);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Array<Monster>>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchText]);

  return (
    <div className="App">
      <h1 className='app-title'> Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="Search Monsters"
        onSearchChange={onSearchChange}
      />
      <p></p>
      <CardList monsters={filteredMonsters} />
    </div >
  )
};

export default App;
