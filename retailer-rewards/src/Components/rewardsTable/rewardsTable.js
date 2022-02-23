import { rewardsColumns } from './columns';
import Table from '../table/table';

function RewardsTable(props) {
    const rewardCols = rewardsColumns;
    const userData = props.rewards;

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

    let monthlyTransactions = userData.reduce((grouped, data) => {
        const date = new Date(data['date'])
        const month = date.toLocaleString('default', { month: 'short' });

        if (!grouped[month]) {
            grouped[month] = [];
        }
        grouped[month].push(calculateRewards(data['amount']));
        return grouped;
    }, {});
    for (let month in monthlyTransactions) {
        monthlyTransactions[month] = monthlyTransactions[month].reduce((partialSum, a) => partialSum + a, 0);
    }
    let total_rewards = 0;
    for (let month in monthlyTransactions) {
        total_rewards = total_rewards + monthlyTransactions[month];
    }
    monthlyTransactions.Total = total_rewards;

    let monthlyRewards = Object.keys(monthlyTransactions).map((data) => {
        return {
            'perMonth': data,
            'rewards': monthlyTransactions[data]
        };
    });
    let last3Months = monthlyRewards.filter(reward => reward['perMonth'] !== 'Sep')
    if (last3Months && last3Months.length > 0) {
        return (
            <div>
                <h3>Rewards Earned:</h3>
                <Table cols={rewardCols} fullData={last3Months} />
            </div>
        )
    }
    else {
        return <h1></h1>
    }
}

export default RewardsTable