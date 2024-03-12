function Data({name, stock, price, id, ID, deleteButton, editButton}) {
    return (  
        <div className="container">
            <table className="table">
                <h3 className="data-name">No: {id}</h3>
                <h3 className="data-name">ID: {ID}</h3>
                <h3 className="data-name">Name: {name}</h3>
                <h3 className="data-position">Price: {price}</h3>
                <h3 className="data-position">Stock: {stock ? "true" : "false"}</h3>
                {/* Uncomment and adjust the buttons as needed */}
                {/* <button onClick={()=> navigate(`/data/${id}`)}>View Detail</button>
                {deleteButton}
                {editButton} */}
            </table>
        </div>
    );
}

export default Data;