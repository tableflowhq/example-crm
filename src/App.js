import React, { useState } from 'react';
import './App.css';
import TableFlowComponent from './TableFlowComponent';
import DataTable from './DataTable';
import ImporterIDInput from './ImporterIDInput';
import DownloadModal from './DownloadModal';

function App() {
  // State initialization
  const [importedData, setImportedData] = useState([]);
  const [tableData, setTableData] = useState(null);
  const [importerID, setImporterID] = useState('dc98cc3a-45f3-4a0d-b834-b921ac7d8aee');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleImportComplete = (newTableData) => {
    setTableData(newTableData);
    setImportedData(newTableData.rows);
  };

  const handleImporterIDChange = (newImporterID) => {
    setImporterID(newImporterID);
  };

  const isDataPresent = importedData.length > 0;

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-logo">ExampleCRM</h1>
        <ImporterIDInput onImporterIDChange={handleImporterIDChange} defaultImporterID={importerID} />
        <TableFlowComponent onImportComplete={handleImportComplete} importerID={importerID} />
      </header>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
