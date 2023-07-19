import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";
// import Auth from '../utils/auth';


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    

   


    // const expenseStr = JSON.stringify(expenses);

    // const storedExpenses = JSON.parse(localStorage.getItem('expense'))

    // const [expense, setExpense] = useState(''); 

    // useEffect(() => {
    //     localStorage.setItem('expense', JSON.stringify(expenses))
    // }, []);
    
 
    return (
          <ul>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} 
                />              
            ))}
        </ul>  
    );
};

export default ExpenseList;