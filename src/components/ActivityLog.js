import React, { useState } from 'react';
import './ActivityLog.css';

function ActivityLog() {
    
  const [activities, setActivities] = useState([
    { id: 1, date: '2025-09-12', type: 'Sowing', notes: 'Planted brinjal seeds in plot A.' },
    { id: 2, date: '2025-09-10', type: 'Irrigation', notes: 'Watered all plots for 30 minutes.' },
  ]);
  
  const [activityType, setActivityType] = useState('Sowing');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notes) return; // Don't add empty notes
    
    const newActivity = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10), // Today's date
      type: activityType,
      notes: notes,
    };
    
    setActivities([newActivity, ...activities]);
    setNotes(''); // Clear the form
  };

  return (
    <div className="log-container">
      <h2>📝 Activity Logbook</h2>
      
      <form onSubmit={handleSubmit} className="log-form">
        <h3>Add New Activity</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Activity Type</label>
            <select value={activityType} onChange={(e) => setActivityType(e.target.value)}>
              <option>Sowing</option>
              <option>Irrigation</option>
              <option>Fertilizer</option>
              <option>Pest Sighting</option>
              <option>Harvest</option>
            </select>
          </div>
          <div className="form-group notes-group">
            <label>Notes</label>
            <input 
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Applied neem oil to brinjal crop                                                          🎙️" 
            />
            {/* Add the microphone button */}
            {/* <button 
            type="button" 
            onClick={() => handleVoiceInput(setNotes)} 
            className="voice-input-btn"
            >
            🎙️
            </button> */}
          </div>
          <button type="submit" className="add-log-btn">Add Log</button>
        </div>
      </form>
      
      <div className="activity-feed">
        <h3>Past Activities</h3>
        {activities.map(activity => (
          <div key={activity.id} className="activity-card">
            <div className="activity-header">
              <span className="activity-type">{activity.type}</span>
              <span className="activity-date">{activity.date}</span>
            </div>
            <p className="activity-notes">{activity.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityLog;