import './customers.css';
import React, { useState, useEffect } from 'react';
import Rewards from '../rewards/rewards'

function Customers() {
    const [customers, setCustomers] = useState([]); //set the initial customers to be empty
    const [selectedCustomer, setSelectedCustomer] = useState(" "); // initial selection is treated as empty.

    const fetchData = async () => {
        const res = await fetch('/api/customers');
        const json = await res.json();
        return json;
    }
    useEffect(() => {
        fetchData().then(customers => {
            setCustomers(customers);
        })
    }, [])

    function onCustomerChange(e) {
        e.preventDefault();
        setSelectedCustomer(e.target.value);
       
    }

    return (
        <div>
            <div className='drop-down'>
                <select onChange={onCustomerChange}>
                    <option value=" " key='123'>Choose A customer to view rewards Earned</option>
                    {customers.map(item => (
                        <option
                            key={item.id}
                            value={item.customer}
                        >
                            {item.customer}
                        </option>
                    ))}
                </select>
            </div>
            <div className='rewards'>
                {selectedCustomer === " " ? <h4>None of the customers are selected.</h4> : <Rewards customer={selectedCustomer} />}
            </div>
        </div>

    );
}

export default Customers