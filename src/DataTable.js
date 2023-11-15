import React from 'react';
import './App.css'; // Ensure the CSS file is imported

const DataTable = ({ data }) => {
    // Check if there is data and if the array is not empty

    if (!data.length) {
        return (
          <div className="table-section"> {/* Use the same class as when data is present */}
            <p className="no-data-message">Import contacts to get started</p>
          </div>
        );
      }

  const headers = Object.keys(data[0].values);

  return (
    <div className="table-container"> {/* Add this wrapper div */}
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={`${rowIndex}-${header}`}>{row.values[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
