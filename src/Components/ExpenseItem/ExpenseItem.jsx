import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = ({ date, title, amount }) => {

  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle('Updated!');
    console.log(newTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
