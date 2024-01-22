import './App.css';
import Info from './info.js';

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
      <AddItem />
     
      
    </div>
  );
}

function AddItem(){
  const value="this is the item adding area."
  return(
    <form>
      <label for="text-label">Add Item Here:</label>
      <input type="text" id="text-label" value={value}/>

    </form>
  );
}

export default App;
