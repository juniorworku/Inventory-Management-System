function ItemsDisplay(props) {

    const showItem = (item) => {
        return(
            <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.type}</td>
                        <td>{item.brand}</td>

            </tr>

        )

    }
    return(
        <div className="container">
            <div className="row">
                <h2>Items</h2>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="col">ID
                            </th>
                            <th className="col">Name
                            </th>
                            <th className="col">Price
                            </th>
                            <th className="col">Type
                            </th>
                            <th className="col">Brand
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                    { props.items.map(showItem)} 
                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default ItemsDisplay