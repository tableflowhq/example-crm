import React, { useState } from 'react';
import './App.css';
import TableFlowComponent from './TableFlowComponent';
import DataTable from './DataTable';

function App() {
  // State initialization
  const [importedData, setImportedData] = useState([]);
  const [tableData, setTableData] = useState(null);

  const handleImportComplete = (newTableData) => {
    setTableData(newTableData);
    setImportedData(newTableData.rows);
  };

  const isDataPresent = importedData.length > 0;

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-logo">ExampleCRM</h1>
        <TableFlowComponent onImportComplete={handleImportComplete} />
      </header>
      <div className="main-content">
        {isDataPresent ? (
          <>
            <div className="table-section">
              <DataTable data={importedData} />
            </div>
            <div className="json-section">
              <div className="json-output">
                <h3>Import Data:</h3>
                <pre>{JSON.stringify(tableData, null, 2)}</pre>
              </div>
            </div>
          </>
        ) : (
          <div className="no-data-message-container">
            Import contacts to get started
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
