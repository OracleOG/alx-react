import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>

      {/* Button with inline styling */}
      <button
        style={{ position: 'absolute', right: '10px', top: '10px', background: 'none', border: 'none' }}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close-icon" style={{ width: '10px', height: '10px' }} />
      </button>

      {/* Unordered list */}
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
