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
        <div className='container'>
            <div className='row'>
                <h2>Add an Item</h2>
            </div>
            
            <div className='row'>
                <div className='col'>
                    <lable for="name-field">Name:</lable>
                    <input id="name-field" type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='col'>
                    <lable for="price-field">Price:</lable>
                    <input id="price-field" type="number" className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='col'>
                    <lable for="type-field">Type:</lable>
                    <input id="type-field" type="text" className='form-control' value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div className='col'>
                    <lable for="brand-field">brand:</lable>
                    <input id="brand-field" type="text" className='form-control' value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>
            </div>
            <div className='row mt-3'></div>
                <div className='col col-4'></div>
                    <button type="button" className='col-4 btn btn-dark' onClick={addItemButtonPressed}>Add Item</button>
        
        </div>
    )
}
export default AddItems