import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [expense, setExpense] = useState(''); 

    useEffect(() => {
        localStorage.setItem('expense', JSON.stringify(expenses))
    }, [expenses]);
 
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