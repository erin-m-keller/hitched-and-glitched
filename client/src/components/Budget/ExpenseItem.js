import { AppContext } from "../../context/AppContext";
import React, { useContext, useState, useEffect } from "react";
import { Button } from 'antd';

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

    // const storedExpenses = JSON.parse(localStorage.getItem('expense'))
    

    // const [expenses, setExpense] = useState([]); 

    // useEffect(() => {
    //     localStorage.setItem('expense', JSON.stringify(props))
    // }, [expenses]);

//    let expenseData = localStorage.getItem(expenses);
    
    return (
        <li className='border aliceBlue'>
            <div className="listName">
            <span>
                {props.name}
            </span>
            </div>
            <div className="listPrice">
                <span>
                    ${props.cost}
                </span>
                <Button type='primary' danger ghost onClick={handleDeleteExpense}>Delete</Button>
            </div>
        </li>
    );
};


export default ExpenseItem;