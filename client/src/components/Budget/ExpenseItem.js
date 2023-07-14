import { AppContext } from "../../context/AppContext";
import React, { useContext } from "react";

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span>
                    ${props.cost}
                </span>
                <button type='button' onClick={handleDeleteExpense}>Delete</button>
            </div>
        </li>
    );
};

export default ExpenseItem;