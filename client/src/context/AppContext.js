import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state, 
				expenses: state.expenses.filter((expenses) => 
				expenses.id !==action.payload 
				),
			};

			case 'SET_BUDGET':
				return {
					...state,
					budget: action.payload,
				};

		default:
			return state;
	}
};

const initialState = {
	budget: 25000,
	expenses: [
		{ id: uuidv4(), name: 'Venue', cost: 5000 },
        { id: uuidv4(), name: 'Dress', cost: 1000 },
        { id: uuidv4(), name: 'Tux', cost: 1000 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.starting,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};