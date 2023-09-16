// components/DataGrid.js

import React from 'react';
function DataGrid({ data, onItemClick }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">SpaceX Data Grid</h2>
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => onItemClick(item)}
            className="cursor-pointer p-2 border border-gray-300 rounded mb-2 hover:bg-gray-100"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataGrid;
