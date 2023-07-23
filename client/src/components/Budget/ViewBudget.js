import React from 'react';
import { Button } from 'antd';


const ViewBudget = (props) => {
	return (
		<>
			<span className='budgetDisplay text-gradient'>Budget: ${props.budget}
			<Button className='aliceBlueText' type='text' onClick={props.handleEditClick}>
				Edit
			</Button>
			</span>
		</>
	);
};

export default ViewBudget;