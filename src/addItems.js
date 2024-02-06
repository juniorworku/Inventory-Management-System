import { useState } from 'react'

function AddItems(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

        const addItemButtonPressed = () => {
           props.addItem({ name: name, price:price, type:type, brand:brand}); 
           
           setName("");
           setPrice(0);
           setType("");
           setBrand("");

        }

    return(
        <div>
            <h2>Add an Item</h2>
            <form>
                <lable for="name-field">Name:</lable>
                <input id="name-field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <lable for="price-field">Price:</lable>
                <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <lable for="type-field">Type:</lable>
                <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                <lable for="brand-field">brand:</lable>
                <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <button type="button" onClick={addItemButtonPressed}>Add Item</button>


            </form>
        
        </div>
    )
}
export default AddItems