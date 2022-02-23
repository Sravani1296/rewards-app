import { transactionColumns } from './columns';
import Table from '../table/table';


function TransactionTable(props) {
    const transactionCols = transactionColumns;
    const calculateRewards = (amount) => {
        let rewards = 0;
        if (amount > 100) {
            rewards = (amount - 100) * 2;
        }
        if (amount > 50) {
            rewards = rewards + (amount - 50);
        }
        return rewards;
    };
    let transactions = props.rewards.map(reward => {
        return { date: reward.date, amount: reward.amount, rewards: calculateRewards(reward.amount) };
    });

    if (transactions && transactions.length) {
        return (
            <div>
                <h3>Customer Transactions:</h3>
                <Table cols={transactionCols} fullData={transactions} />
            </div>
        )
    }
    else {
        return <h1></h1>
    }
}

export default TransactionTable