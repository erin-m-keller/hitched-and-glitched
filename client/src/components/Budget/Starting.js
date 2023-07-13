import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";


const Starting = () => {
    const { starting } = useContext(AppContext);

    return (
        <div className="main-content">
            <span>Starting Budget: ${starting}</span>
        </div>
    );
};

export default Starting;