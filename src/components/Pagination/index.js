import React from 'react';

const Pagination = ({ items = [], active, onClick }) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination  pagination-sm justify-content-end">
      {items.map((item, index) => <li key={index} 
        className={`page-item ${item.num === active ? 'active' : ''}`}
        onClick={() => (item.num === active) ? null : onClick(item)}
        >
          <button className="page-link">{item.text}</button>
        </li>)}
    </ul>
  </nav>
)

export default Pagination;
