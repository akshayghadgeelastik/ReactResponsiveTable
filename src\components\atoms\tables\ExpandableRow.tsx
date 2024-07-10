import React from 'react';
import { Column, RowData } from './types'; 
interface ExpandableRowProps {
  data: RowData;
  columns: Column[];
}

const ExpandableRow: React.FC<ExpandableRowProps> = ({ data, columns }) => {
  return (
    <div className="mobile-row-content">
      {columns.map((col, index) => (
        <div key={index} className="mobile-row-item">
          <strong>{col.name}:</strong> {col.cell ? col.cell(data) : col.selector(data)}
        </div>
      ))}
    </div>
  );
};

export default ExpandableRow;
