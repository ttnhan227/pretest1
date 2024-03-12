import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


function DataDetail() {
    //lay param
    const {id} = useParams();

    const [data, setdata] = useState({});

    const getData = () => {
        fetch(`https://65d4ebd53f1ab8c63436466e.mockapi.io/api/data/${id}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(dat => {
            setdata(dat);
        }).catch(error => {
            console.log("Error: " + error);
        })
    };

    //goi ham
    useEffect(() => {
        getData();
    });


    return ( 
        <div className="container">
            <h1>Data Detail</h1>
            <h2 className="data-name">{data.name}</h2>
            <h2 className="data-position">Address: {data.address}</h2>
            <h2 className="data-position">Price: {data.price}</h2>
        </div>
     );
}

export default DataDetail;