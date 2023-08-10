import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget} = useContext(AppContext);

    const setBudget = (newBudget) => {
        const budgetPayload = {
            budget: newBudget
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: budgetPayload
        });
        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span><input type='number' onChange={event => setBudget(event.target.value)} value={budget} step="10"/>
        </div>
    );
};
export default Budget;