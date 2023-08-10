import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencySelector = () => {
    const { dispatch} = useContext(AppContext);


    return (
        <div className='alert alert-secondary'>
            <select name="currency" id="currency">
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default CurrencySelector;