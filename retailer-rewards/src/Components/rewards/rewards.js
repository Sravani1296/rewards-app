import './rewards.css';
import React, { useState, useEffect } from 'react';
import TransactionTable from '../transactionTable/transactionTable';
import RewardsTable from '../rewardsTable/rewardsTable'

function Rewards(props) {

    const selected = props.customer;
    const [rewards, setRewards] = useState([]);

    const fetchTransactions = async () => {
        const res = await fetch('api/customers/transactions?' + new URLSearchParams({
            customer: selected
        }))
        const json = await res.json();
        return json;
    };
    useEffect(() => {
        fetchTransactions().then(rewards => {
            setRewards(rewards);
        })
    
    }, [selected])

    if (rewards && rewards.length > 0) {
        return (
            <div className="rewards-container">
                <div className="rewards-table">
                <TransactionTable rewards={rewards} />
                </div>
                <div className="rewards-table"> 
                <RewardsTable rewards={rewards} />
                </div>
            </div>
        )
    }
    return <h1></h1>
}

export default Rewards