import React, { useContext, useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { AppContext } from "../../context/AppContext";

// code is not saving value entered
// code is not saving value entered
// code is not saving value entered

const Starting = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    // linked to AppContext to set value 
    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    // should handle switch from edit to save 
    return (
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                // editbudget file
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                // viewbudget file
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
        // <div className="main-content">
        //     <span>Starting Budget: ${budget}</span>
        // </div>
    );
};

export default Starting;