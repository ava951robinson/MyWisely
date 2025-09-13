import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    const newExpense = {
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0],
    };
    addExpense(newExpense);
    setDescription('');
    setAmount('');
  };

  return (
    <div className="expense-form-container">
      <h2>Add a New Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Groceries">Groceries</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
