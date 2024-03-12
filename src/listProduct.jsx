import Data from "./Data";
import React, { useState, useEffect } from 'react';

function DataList() {
    const [dataList, setdataList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [stockStatus, setStockStatus] = useState('all');

    const getData = () => {
        fetch('https://65d4ebd53f1ab8c63436466e.mockapi.io/api/data', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(dataList => {
            setdataList(dataList);
        }).catch(error => {
            console.log("Error: " + error);
        })
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredDataList = dataList.filter(dat => {
        const matchesSearch = dat.name.toLowerCase().includes(searchKeyword.toLowerCase());
        const matchesStockStatus = stockStatus === 'all' || dat.inStock === (stockStatus === 'in-stock');
        return matchesSearch && matchesStockStatus;
    });

    return (   
        <div className="container" style={{textAlign: 'left'}}>
            <h1>Product List</h1>
            Enter product name: <input type="text" placeholder="Search..." value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} />
            <div>
                <label>
                    <input type="radio" value="all" checked={stockStatus === 'all'} onChange={e => setStockStatus(e.target.value)} />
                    All
                </label>
                <label>
                    <input type="radio" value="in-stock" checked={stockStatus === 'in-stock'} onChange={e => setStockStatus(e.target.value)} />
                    In-Stock
                </label>
                <label>
                    <input type="radio" value="out-stock" checked={stockStatus === 'out-stock'} onChange={e => setStockStatus(e.target.value)} />
                    Out-Stock
                </label>
            </div>
            <table className="product-list" style={{borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th style={{border: '1px solid black', padding: '8px'}}>No</th>
                        <th style={{border: '1px solid black', padding: '8px'}}>ID</th>
                        <th style={{border: '1px solid black', padding: '8px'}}>Name</th>
                        <th style={{border: '1px solid black', padding: '8px'}}>Price</th>
                        <th style={{border: '1px solid black', padding: '8px'}}>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDataList.map((dat, index) => ( 
                        <tr key={index}>
                            <td style={{border: '1px solid black', padding: '8px'}}>{dat.id}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{dat.ID}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{dat.name}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{dat.price}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{dat.inStock ? "true" : "false"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5 className="App">&copy; Copyright Fpt Aptech</h5>

        </div>

     );
}

export default DataList;