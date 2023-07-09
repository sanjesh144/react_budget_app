import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const setCurrencyHandler = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };

  //  'Â£' 'â‚¬' '$' 'â‚¹'
  
  const currencyLabel = ()=> {
    switch(currency){
      case '$' :
        return '$ Dollar'
      case 'Â£' :
        return 'Â£ Pound'
      case 'â‚¬' :
        return 'â‚¬ Euro'
      case 'â‚¹' :
        return 'â‚¹ Ruppee'
      default:
        return ''
    }
  }

  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: '#93e399', color: '#fff' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency {'('}{currencyLabel()}{')'}
      </button>
      <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('$')}
          >
           $ Dollar
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('Â£')}
          >
           Â£ Pound
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('â‚¬')}
          >
           â‚¬ Euro
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler('â‚¹')}
          >
           â‚¹ Ruppee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Currency;