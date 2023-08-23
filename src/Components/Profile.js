import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageCapture = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Save user information to database or perform other actions
    // ...
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-image-container">
        {selectedImage ? (
          <img className="profile-image" src={selectedImage} alt="Profile" />
        ) : (
          <div className="profile-placeholder">No Image</div>
        )}
        <div className="profile-upload">
          <label htmlFor="image-upload" className="upload-label">
            Upload Image
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            capture="environment"
          />
          <input
            type="file"
            id="image-capture"
            accept="image/*"
            onChange={handleImageCapture}
            capture="user"
          />
        </div>
        {selectedImage && (
          <button className="profile-delete" onClick={handleImageDelete}>
            Delete
          </button>
        )}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
