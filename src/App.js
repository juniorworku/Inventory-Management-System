import { useState } from 'react';
import './App.css';
import SearchBar from "./searchBar"
import AddItems from './addItems';
import ItemsDisplay from './itemsDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items:[] });

  const updateFilters= (searchParams) => {
  setFilters(searchParams);
}
  const addItemTodata = (item) =>{
    let items = data["items"];
    item.id  = items.length;
    items.push(item);
    setData({items: items});
    console.log(data)

  }
  return (
    <div className="container">
       <div className='row mt-3'>
        <ItemsDisplay items={data["items"]}/>
      </div>
      <div className='row mt-3'>
        <SearchBar updateSearchParams={updateFilters}/>
      </div>
      <div className='row mt-3'>
        <AddItems addItem={ addItemTodata}/>
      </div>
      
      
    </div>
  );
}

export default App;
