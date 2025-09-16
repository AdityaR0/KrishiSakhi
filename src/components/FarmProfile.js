import React, { useState } from 'react';
import './FarmProfile.css';

// Initial state for a new user's empty profile
const emptyProfile = {
  location: '',
  landSize: '',
  primaryCrop: '',
  soilType: '',
  irrigation: '',
};

function FarmProfile() {
  // We start with 'null' to simulate a user who hasn't created a profile yet.
  // In a real app, you would fetch this from a server.
  const [profile, setProfile] = useState(null); 
  
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState(emptyProfile);

  const handleEdit = () => {
    setEditableProfile(profile); // Load current profile into the editor
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(editableProfile); // Save the changes
    setIsEditing(false);
  };

  const handleCreate = () => {
    // For a new user, save the form data as their profile
    setProfile(editableProfile); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  return (
    <div className="profile-container">
      {profile ? (
        // --- THIS IS SHOWN IF A PROFILE EXISTS ---
        <>
          <div className="profile-header">
            <h2>🌱 Farmer & Farm Profile</h2>
            {isEditing ? (
              <button onClick={handleSave} className="edit-profile-btn">Save Changes</button>
            ) : (
              <button onClick={handleEdit} className="edit-profile-btn">Edit Profile</button>
            )}
          </div>

          {isEditing ? (
            // --- EDITING VIEW ---
            <div className="profile-details-grid">
              {/* Input fields for editing... */}
              <div className="detail-card"><label>📍 Location</label><input type="text" name="location" value={editableProfile.location} onChange={handleChange} /></div>
              <div className="detail-card"><label>🏞️ Land Size</label><input type="text" name="landSize" value={editableProfile.landSize} onChange={handleChange} /></div>
              <div className="detail-card"><label>🌱 Primary Crop</label><input type="text" name="primaryCrop" value={editableProfile.primaryCrop} onChange={handleChange} /></div>
              <div className="detail-card"><label>🟤 Soil Type</label><input type="text" name="soilType" value={editableProfile.soilType} onChange={handleChange} /></div>
              <div className="detail-card"><label>💧 Irrigation</label><input type="text" name="irrigation" value={editableProfile.irrigation} onChange={handleChange} /></div>
            </div>
          ) : (
            // --- DISPLAY VIEW ---
            <div className="profile-details-grid">
              <div className="detail-card"><h4>📍 Location</h4><p>{profile.location}</p></div>
              <div className="detail-card"><h4>🏞️ Land Size</h4><p>{profile.landSize}</p></div>
              <div className="detail-card"><h4>🌱 Primary Crop</h4><p>{profile.primaryCrop}</p></div>
              <div className="detail-card"><h4>🟤 Soil Type</h4><p>{profile.soilType}</p></div>
              <div className="detail-card"><h4>💧 Irrigation</h4><p>{profile.irrigation}</p></div>
            </div>
          )}
        </>
      ) : (
        // --- THIS IS SHOWN IF NO PROFILE EXISTS (NEW USER) ---
        <>
          <div className="profile-header">
            <h2>Create Your Farm Profile</h2>
          </div>
          <div className="profile-details-grid">
            {/* Form for creating a new profile */}
            <div className="detail-card"><label>📍 Location</label><input type="text" name="location" placeholder="e.g., Thrissur, Kerala" value={editableProfile.location} onChange={handleChange} /></div>
            <div className="detail-card"><label>🏞️ Land Size</label><input type="text" name="landSize" placeholder="e.g., 2.5 Acres" value={editableProfile.landSize} onChange={handleChange} /></div>
            <div className="detail-card"><label>🌱 Primary Crop</label><input type="text" name="primaryCrop" placeholder="e.g., Brinjal" value={editableProfile.primaryCrop} onChange={handleChange} /></div>
            <div className="detail-card"><label>🟤 Soil Type</label><input type="text" name="soilType" placeholder="e.g., Alluvial" value={editableProfile.soilType} onChange={handleChange} /></div>
            <div className="detail-card"><label>💧 Irrigation</label><input type="text" name="irrigation" placeholder="e.g., Drip System" value={editableProfile.irrigation} onChange={handleChange} /></div>
            <button onClick={handleCreate} className="create-profile-btn">Create Profile</button>
          </div>
        </>
      )}
    </div>
  );
}

export default FarmProfile;