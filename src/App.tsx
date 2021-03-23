import React, {useState} from 'react';
import './App.scss';

import HeaderText from './components/atoms/header_text/HeaderText';
import SearchBar from "./components/atoms/search_bar/SearchBar";

function App() {
const [isLoading, setLoading] =  useState<boolean>(false);
const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className='App'>
      <div className={["header", isLoading ? "is-animating" : ""].join(' ')}>
          <HeaderText label={'What Pokémon are you looking for?'} />
          <SearchBar value={searchValue} onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(ev.target.value)}/>
      </div>
    </div>
  );
}

export default App;
