import React from "react"; 

const AddExpense = () => {
    return (
        <form> 
            <div>
                <div> 
                    <label>Name</label>
                    <input required='required' type='text' id='name'></input>
                </div>
                <div> 
                    <label>Cost</label>
                    <input required='required' type='text' id='cost'></input>
                </div>
            </div>
            
            <div>
                <div>
                    <button>
                       Add to Budget 
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpense;