import { useState } from 'react';
import './App.css';
import SearchBar from "./searchBar"
import AddItems from './addItems';
import ItemsDisplay from './itemsDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items:[] });

  const updateFilters= (searchParams) => {
  setData(searchParams);
}
  const addItemTodata = (item) =>{
    let items = data["items"];
    items.id  = items.length;
    items.push(item);
    setData({items: items});
    console.log(data)

  }
  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters}/>
      <ItemsDisplay items={data["items"]}/>
      <AddItems addItem={ addItemTodata}/>
      
      
    </div>
  );
}

export default App;
