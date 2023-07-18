import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Starting from '../components/Budget/Starting';
import Spent from '../components/Budget/Spent';
import Remaining from '../components/Budget/Remaining';
import ExpenseList from '../components/Budget/ExpenseList';
import AddExpense from '../components/Budget/AddExpense';
import { AppProvider } from '../context/AppContext';

const Budget = () => {
    return (
      <AppProvider>
      {/* starting budget */}
      {/* bootstrap  container budget*/}
      <div className='darkGreen'>
        {/* bootstrap  "inlineBorder"*/}
        <div className='hero inlineBorder '>
          <h1 className='marginTop'>Budget Board</h1>
          {/* bootstrap  'col-sm'*/}
          <div>
            <Starting />
          </div>
          {/* bootstrap  'col-sm'*/}
          <div className='margin'>
            <Spent />
          </div>
          {/* bootstrap  'col-sm'*/}
          <div>
            <Remaining />
          </div>
        </div>

{/* expenses added to the budget */}
        <h2 className='center salmonText'>Expenses</h2>
        <div>
          <div>
            <ExpenseList />
          </div>
        </div>

{/* form to add expenses */}
        <div  className="footer">
        <h3 className="center">Add Expenses</h3>
        {/* bootstrap  'col-sm'*/}
        <div>
          <AddExpense />
        </div>
        </div>

      </div>  
      </AppProvider>
    );
  };
  
  export default Budget;