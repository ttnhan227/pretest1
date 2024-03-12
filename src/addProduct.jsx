// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function DataAdd() {
//     const [ID, setID] = useState("");
//     const [name, setname] = useState("");
//     const [address, setaddress] = useState("");
//     const [price, setprice] = useState("");

//     //tao bien navigate
//     const navigate = useNavigate();

//     const submitData = (event) => {
//         const newData = {
//             "ID" : ID,
//             "name": name,
//             "address": address,
//             "price": price
//         };

//         event.preventDefault();
//         console.log(newData);

//         fetch('https://65d4ebd53f1ab8c63436466e.mockapi.io/api/data', {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             // Send your data in the request body as JSON
//             body: JSON.stringify(newData)
//         }).then( () => {
//             alert("Added new data successfully");

//             //chuyen trang
//             navigate('/data');
//         })
//     }

//     return (  
//         <div className="form-container">
//             <form onSubmit={submitData}>
//                 <div className="form-row">
//                     <div className="form-label">ID:</div>
//                     <div className="form-cell">
//                         <input type="text" name="ID" onChange={(e) => setID(e.target.value)} className="form-input" />
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-label">Name:</div>
//                     <div className="form-cell">
//                         <input type="text" name="name" onChange={(e) => setname(e.target.value)} className="form-input" />
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-label">Address:</div>
//                     <div className="form-cell">
//                         <input type="text" name="address" onChange={(e) => setaddress(e.target.value)} className="form-input" />
//                     </div>
//                 </div>
//                 <div className="form-row">
//                     <div className="form-label">Price:</div>
//                     <div className="form-cell">
//                         <input type="text" name="price" onChange={(e) => setprice(e.target.value)} className="form-input" />
//                     </div>
//                 </div>
//                 <div className="form-row form-submit">
//                     <input type="submit" value="Add" />
//                 </div>
//             </form>
//         </div>
//      );
// }

// export default DataAdd;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file





function DataAdd() {
    const [ID, setID] = useState("");
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [stock, setInStock] = useState(true); // Default to in-stock
    const [errorMessages, setErrorMessages] = useState({ ID: "", name: "", price: "" });

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        let errors = { ID: "", name: "", price: "" };

        if (!ID || !/^P\d+$/.test(ID)) {
            isValid = false;
            errors.ID = "ID is required and must be in the format Pxx (x: digit)";
        }

        if (!name) {
            isValid = false;
            errors.name = "Name is required";
        }

        if (!price || isNaN(price) || price <=   0) {
            isValid = false;
            errors.price = "Price is required, must be a number greater than   0";
        }

        setErrorMessages(errors);
        return isValid;
    };

    const submitData = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const newData = {
                "ID": ID,
                "name": name,
                "price": price,
                "inStock": stock // Include stock status in the data
            };

            fetch('https://65d4ebd53f1ab8c63436466e.mockapi.io/api/data', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newData)
            }).then(() => {
                alert("New Product Added");
                navigate('/data');
            });
        }
    }

    return (
        <div className="container">
            <div><h1>Add New Product</h1></div>
            <form onSubmit={submitData}>
                ID: <input type="text" name="ID" onChange={(e) => setID(e.target.value)} />
                {errorMessages.ID && <div>{errorMessages.ID}</div>} <br />
                Name: <input type="text" name="name" onChange={(e) => setname(e.target.value)} />
                {errorMessages.name && <div>{errorMessages.name}</div>} <br />
                Price: <input type="text" name="price" onChange={(e) => setprice(e.target.value)} />
                {errorMessages.price && <div>{errorMessages.price}</div>} <br />
                In-Stock: <input type="radio" name="inStock" value="true" checked={stock} onChange={() => setInStock(true)} /> Yes
                <input type="radio" name="inStock" value="false" checked={!stock} onChange={() => setInStock(false)} /> No <br />
                <input type="submit" value="Add" />
            </form>
            <h5 className="App">&copy; Copyright Fpt Aptech</h5>
        </div>
    );
}

export default DataAdd;