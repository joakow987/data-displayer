import React, { useState, useContext } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import Context from '../actions/context';
import { getTableData } from '../browser/helpers';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './table.css';

const Table = () => {
  const { selectedCountry } = useContext(Context);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const tableData = getTableData(selectedCountry);
  const [rowDef, setRowDef] = useState(tableData);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  return (
    <div className="ag-theme-alpine preview-table">
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowDef}>
        <AgGridColumn field="weekly_count"></AgGridColumn>
        <AgGridColumn field="year_week"></AgGridColumn>
        <AgGridColumn field="indicator"></AgGridColumn>
      </AgGridReact >
    </div >
  );
};

export default Table;
