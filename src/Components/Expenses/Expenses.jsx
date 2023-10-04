import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../UI/Card';
import Filter from '../Filter/Filter';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <div>
      <Filter />
    <Card className="expenses">
      <h2>this is the expenses component</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
    </div>
  );
};

export default Expenses;
