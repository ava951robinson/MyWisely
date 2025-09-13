import React from 'react';
import './Receipt.css';

const Receipt = ({ receiptUrl }) => {
  return (
    <div className="receipt-container">
      <h3>Receipt</h3>
      {receiptUrl ? (
        <img src={receiptUrl} alt="Expense receipt" style={{ maxWidth: '100%' }} />
      ) : (
        <p>No receipt available.</p>
      )}
    </div>
  );
};

export default Receipt;
