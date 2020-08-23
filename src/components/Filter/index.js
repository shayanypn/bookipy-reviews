import React from 'react';
import { iconsMap } from '../../constant';
import './main.css';

const Filter = ({ items = [], onClick }) => (
  <div id="filter">
    <strong className="mr-2">Filtered By:</strong>
    {items.map((filter, index) => 
      (
        <button key={index}
          type="button"
          className="btn btn-sm btn-light mr-1 mb-1"
          >
          {filter.type === "score"
            ? <>Score: <b>{filter.value}</b></>
            : <img src={iconsMap[filter.value]} alt="channel icon" />
          }
          <span 
            className="ml-1 badge badge-secondary"
            onClick={() => onClick(filter)}
            >X</span>
        </button>
      )
    )}
  </div>
)

export default Filter;
