import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className='container budget'>
        {/* bootstrap  "inlineBorder"*/}
        <div className='inlineBorder'>
          <h1>Budget Board</h1>
          {/* bootstrap  'col-sm'*/}
          <div className='col-sm'>
            <Starting />
          </div>
          {/* bootstrap  'col-sm'*/}
          <div className='col-sm'>
            <Spent />
          </div>
          {/* bootstrap  'col-sm'*/}
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
        {/* bootstrap  'col-sm'*/}
        <div className='col-sm'>
          <AddExpense />
        </div>
        

      </div>  
      </AppProvider>
    );
  };
  
  export default Budget;