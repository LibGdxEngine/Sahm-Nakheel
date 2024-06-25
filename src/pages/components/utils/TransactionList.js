// components/TransactionList.js
import React from 'react';
import formatDate from '../../../components/utils/dateFormatter';
// const transactions = [
//     { id: 1, number: '1234567890', date: '10 Oct 2024', amount: '3500 Egp', status: 'Completed', contract: 'CONTRACT #1' },
//     { id: 2, number: '1234567890', date: '10 Oct 2024', amount: '3500 Egp', status: 'On Hold', contract: 'CONTRACT #1' },
//     { id: 3, number: '1234567890', date: '10 Oct 2024', amount: '3500 Egp', status: 'In Progress', contract: 'CONTRACT #1' },
//     { id: 4, number: '1234567890', date: '10 Oct 2024', amount: '3500 Egp', status: 'In Progress', contract: 'CONTRACT #1' },
//     { id: 5, number: '1234567890', date: '10 Oct 2024', amount: '3500 Egp', status: 'In Progress', contract: 'CONTRACT #1' },
//     { id: 6, number: '1234567890', date: '10 Oct 2024', amount: '3500 Egp', status: 'In Progress', contract: 'CONTRACT #1' },
// ];

const getStatusClass = (status) => {
    switch (status) {
        case 'COMPLETED':
            return 'text-green-500';
        case 'ON_HOLD':
            return 'text-orange-500';
        case 'IN_PROGRESS':
            return 'text-blue-500';
        default:
            return '';
    }
};

const TransactionList = ({transactions}) => {
    if (!transactions) return null;

    return (
        <div className="space-y-0">
            {transactions.map((transaction) => (
                <div style={{cursor: "pointer"}} key={transaction.pkid}
                     className="flex flex-col mx-8 hover:bg-lighterGray hover:opacity-80">
                    <div
                        className="flex flex-row md:flex-row mb-2 mt-3 md:items-center justify-between space-y-0 md:space-y-0">
                        <div className="flex-1 text-center">
                            <div className="text-xs text-midGreen font-normal">{transaction.pkid}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs text-primary font-normal">{formatDate(transaction.created_at)}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs font-normal">{transaction.installment.amount}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className={`text-xs font-normal ${getStatusClass(transaction.contract.status)}`}>
                                {transaction.contract.status}
                            </div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs font-normal">{transaction.contract.name}</div>
                        </div>

                    </div>
                    <div className={`bg-mildGray w-full h-[0.09px]`}></div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
