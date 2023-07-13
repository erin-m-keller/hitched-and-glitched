import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        { id: 1, name: 'Venue', cost: 5000 },
        { id: 2, name: 'Dress', cost: 1000 },
        { id: 3, name: 'Tux', cost: 1000 },
    ];

    return (
        <ul>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;