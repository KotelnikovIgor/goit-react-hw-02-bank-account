import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => (
  <table className="history">
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}$</td>
          <td>{el.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TransactionHistory;
