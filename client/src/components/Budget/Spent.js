import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Spent = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    },0);

    return (
        <div class='alert alert-primary p-3'>
            <span>Spent: ${ totalExpenses }</span>
        </div>
    );
};

export default Spent;