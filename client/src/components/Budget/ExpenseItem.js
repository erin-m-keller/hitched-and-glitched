import React from "react";

const ExpenseItem = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span>
                    ${props.cost}
                </span>
            </div>
        </li>
    );
};

export default ExpenseItem;