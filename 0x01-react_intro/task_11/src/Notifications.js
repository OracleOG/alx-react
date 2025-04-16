import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications() {
  const lastNotification = getLatestNotification();
  return (
    <div className="Notifications" style={{ position: 'relative' }}>
      <p>Here is the list of notifications</p>
      <ol>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: lastNotification}}></li>
      </ol>
      <button 
        aria-label="Close" 
        onClick={() => alert('Close button has been clicked')} 
        style={{ 
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        X
      </button>
    </div>
  );
}
