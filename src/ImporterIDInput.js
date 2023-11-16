import React from 'react';

function ImporterIDInput({ onImporterIDChange, defaultImporterID }) {
  const handleInputChange = (event) => {
    onImporterIDChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="importerID">Importer ID:</label>
      <input type="text" id="importerID" className="text-input" onChange={handleInputChange} value={defaultImporterID} />
    </div>
  );
}

export default ImporterIDInput;