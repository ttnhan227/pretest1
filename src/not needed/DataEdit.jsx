

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import DataEditForm from "./DataEditForm";
import { useNavigate } from 'react-router-dom';


function DataEdit() {
    //lay param
    const {id} = useParams();

    const navigate = useNavigate(); // Import useNavigate and call it here


    const [data, setdata] = useState(null);

    useEffect(() => {
        fetch(`https://65d4ebd53f1ab8c63436466e.mockapi.io/api/data/${id}`)
        .then((res) => res.json())
        .then((dat) => {
            setdata(dat);
            alert("PLS RETURN TO HOMEPAGE");
            navigate('/');
        });
    }, [id, navigate]);

    //console.log(student);

    return data ? (<DataEditForm dat={data} />) : (<p>Loading...</p>);
}

export default DataEdit;