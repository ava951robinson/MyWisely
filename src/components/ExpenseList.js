import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list-container">
      <h2>Recent Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <div className="expense-details">
                <span className="description">{expense.description}</span>
                <span className="category">({expense.category})</span>
                <span className="date">{expense.date}</span>
              </div>
              <div className="expense-right">
                <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                <button
                  className="delete-button"
                  onClick={() => deleteExpense(expense.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
