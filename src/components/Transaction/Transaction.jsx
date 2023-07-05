import React from 'react';
import TransactionItem from './TransactionItem';

const Transaction = ({ data }) => {
  const { id, type, amount, currency } = data;
  console.log(data);
  return (
    <>
      <>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            <TransactionItem item={data} />
          </tbody>
        </table>
      </>
      <></>
    </>
  );
};

export default Transaction;
