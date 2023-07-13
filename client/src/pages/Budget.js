import React from 'react';
import Starting from '../components/Budget/Starting';
import Spent from '../components/Budget/Spent';
import Remaining from '../components/Budget/Remaining';
import ExpenseList from '../components/Budget/ExpenseList';
import AddExpense from '../components/Budget/AddExpense';

const Budget = () => {
    return (
      <>
      {/* starting budget */}
      <div className='container'>
        <div className="inlineBorder">
          <h1>Budget Board</h1>
          <div className='col-sm'>
            <Starting />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
        </div>

{/* expenses added to the budget */}
        <h2>Expenses</h2>
        <div>
          <div>
            <ExpenseList />
          </div>
        </div>

{/* form to add expenses */}
        <h3>Add Expenses</h3>
        <div>
          <AddExpense />
        </div>

      </div>  
      </>
    );
  };
  
  export default Budget;