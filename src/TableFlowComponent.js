import React, { useState } from 'react';
import { TableFlowImporter } from '@tableflow/react';
import './App.css'; // Import the CSS for styling

const TableFlowComponent = ({ onImportComplete }) => {
  const [isImporterOpen, setIsImporterOpen] = useState(false);

  const handleComplete = (data) => {
    console.log('Import completed with data:', data);
    onImportComplete(data); // Pass the entire data object to the parent component
    setIsImporterOpen(false);
  };

  return (
    <>
      <div className="button-container">
        <button
          onClick={() => setIsImporterOpen(true)}
          className="button-primary"
        >
          Import Contacts with TableFlow
        </button>
      </div>
      <TableFlowImporter
        importerId="dc98cc3a-45f3-4a0d-b834-b921ac7d8aee" // Your specified importer ID
        modalIsOpen={isImporterOpen}
        modalOnCloseTriggered={() => setIsImporterOpen(false)}
        darkMode={false} // Or true, if you prefer the dark mode
        metadata={{ user_id: "1234" }}
        onComplete={handleComplete}
        primaryColor='#246A24'
      />
    </>
  );
};

export default TableFlowComponent;
