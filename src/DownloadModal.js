import React from 'react';
import { PiFileArrowDown } from 'react-icons/pi';

function DownloadModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
<div className="modal" onClick={onClose}>
  <div className="modal-content" onClick={e => e.stopPropagation()}>
    <h2>Welcome to ExampleCRM</h2>
    <p>To get started, download the example CSV file below.</p>
    <a href="/contacts.csv" download>
      <button className='button-primary download-button' onClick={onClose}>
        Download contacts.csv <span className="icon"><PiFileArrowDown size={20}/></span>
      </button>
    </a>
  </div>
</div>
    );
}

export default DownloadModal;