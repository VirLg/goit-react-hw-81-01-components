import React from 'react';

const TransactionItem = ({ item }) => {
  return item.map(({ amount, currency, id, type }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  });
};

export default TransactionItem;
