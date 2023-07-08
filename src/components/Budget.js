import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_VALUE = 20000;

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onChangeBudgetHandler = (event) => {
        const eneteredValue = Number(event.target.value);

        if (Number.isNaN(eneteredValue)){
            alert('Please enter a valid number');
            return;
        }

        if (!Number.isInteger(eneteredValue)){
            alert('Please eneter an integer');
            return;
        }

        if(eneteredValue < totalExpenses){
            alert("The value of the budget can't be lower than the expenses" + currency + totalExpenses);
        }
        else{
            if (eneteredValue > MAX_VALUE) {
                alert('Please enter a value less that ' + MAX_VALUE);
                return;
              }
        
              dispatch({
                type: 'SET_BUDGET',
                payload: eneteredValue,
              });
        }
    };


    return (
        <div
          className="alert alert-secondary"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div>
            <label htmlFor="budget"> Budget:</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>{currency}</span>
            <input
              required="required"
              type="number"
              id="budget"
              value={budget}
              step="10"
              onChange={onChangeBudgetHandler}
            ></input>
          </div>
        </div>
      );
};
export default Budget;