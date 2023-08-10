import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses} = useContext(AppContext);

    const setBudget = (newBudget) => {

        if(newBudget < expenses) {
            alert("The new budget must be greater then the current expenses  £"+expenses);
            newBudget = budget;
        }

        const maximumBudget = 20000;
        if (newBudget > maximumBudget) {
            alert("The new budget must not exceed the maximum budget of £"+maximumBudget);
            newBudget = budget;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: {
                budget: parseInt(newBudget)
            }
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span><input type='number' onChange={setBudget(e.target.value)}>{budget}</input>
        </div>
    );
};
export default Budget;