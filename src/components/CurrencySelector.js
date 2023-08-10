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
        <div className="input-group mb-3">
            <label className="input-group-text" for="currency" line-height="35">Currency</label>
            <select className='alert alert-success' name="currency" id="currency" onChange={(event) => setCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option> 
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default CurrencySelector;