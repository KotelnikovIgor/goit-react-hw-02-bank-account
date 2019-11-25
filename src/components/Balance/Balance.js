import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, income, expenses }) => (
  <section className={styles.balance}>
    <span className={styles.span__income}>&uarr;{income}$</span>
    <span className={styles.span__expenses}>&darr;{expenses}$</span>
    <span className={styles.span__balance}>Balance: {balance}</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default Balance;
