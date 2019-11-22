import React from 'react';
import PropTypes from 'prop-types';

const Balance = ({ balance, income, expenses }) => (
  <section className="balance">
    <span>&uarr;{income}$</span>
    <span>&darr;{expenses}$</span>
    <span>Balance: {balance}</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Balance;
