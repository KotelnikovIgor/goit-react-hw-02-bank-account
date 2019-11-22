import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ handleChange, handleWithdraw, handleDeposit }) => (
  <section className="controls">
    <input
      type="number"
      name="amount"
      onChange={handleChange}
      placeholder="Enter sum"
    />
    <button onClick={handleDeposit} type="button">
      Deposit
    </button>
    <button onClick={handleWithdraw} type="button">
      Withdraw
    </button>
  </section>
);

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleWithdraw: PropTypes.func.isRequired,
  handleDeposit: PropTypes.func.isRequired,
};
export default Controls;
