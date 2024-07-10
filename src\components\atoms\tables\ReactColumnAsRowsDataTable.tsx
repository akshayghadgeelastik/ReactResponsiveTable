import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DatatableBase from './DatatableBase';
import ExpandableRow from './ExpandableRow';
import { Column, RowData } from './types';  
import UsersView from '../../pages/users/UsersView';
interface ReactColumnAsRowsDataTableProps {
  columns: Column[];
  data: RowData[];
}

const ReactColumnAsRowsDataTable: React.FC<ReactColumnAsRowsDataTableProps> = ({ columns, data }) => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1040px)' });

  const modifiedColumns = isMobileOrTablet ? [columns[0]] : columns;

  return (
    <div className="data-table">
      <DatatableBase
        columns={modifiedColumns}
        data={data}
       expandableRows={isMobileOrTablet}
       expandableRowsComponent={({ data }: { data: RowData }) => <ExpandableRow data={data} columns={columns.slice(1)} />}
        // expandableRowsComponent={({ data }: { data: RowData }) => <UsersView  />}
      />
    </div>
  );
};

export default ReactColumnAsRowsDataTable
