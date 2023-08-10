import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencySelector = () => {
    const { dispatch} = useContext(AppContext);

    const setCurrency = (newCurrency) => {
        const currencyPayload = {
            currency: newCurrency
        };

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyPayload
        });
    }

    return (
        <select className='alert alert-success' name="currency" id="currency" onChange={(event) => setCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option> 
                <option value="₹">₹ Rupee</option>
        </select>
    );
};
export default CurrencySelector;