import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationModal from './popup'; // Import your custom modal component

const Subpage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'User',
    lastName: 'SAYNA',
    password: 'thepassword',
    email: 'email@gmail.com',
    phoneNumber: '+261 00 000 00',
    addressOne: 'madagascar',
    addressTwo: 'madagascar',
  });

  const [newsletter, setNewsletter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    // Show the logout confirmation popup
    setIsModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    // Perform logout action and redirect to /account
    setIsModalOpen(false);
    window.location.href = '/account';
  };

  const handleModifyInfoClick = () => {
    setIsEditing(true);
  };

  const handleSaveInfoClick = () => {
    setIsEditing(false);
    // Save the modified user info (you can implement your logic here)
  };

  const handleNewsletterChange = (e) => {
    setNewsletter(e.target.checked);
  };

  return (
    <div className="bg-account intro subpage" style={{ height: '100vh' }}>
      <h1>SUBPAGE</h1>
      <Link to="/registration">Back to Registration</Link>
      <section>
        <h2>Infos History Review Faves</h2>
        <button onClick={handleLogoutClick}>Logout</button>
      </section>
      <section>
  <h2>Personal Info</h2>
        <div>
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          ) : (
            <span>{userInfo.name}</span>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.lastName}
              onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
            />
          ) : (
            <span>{userInfo.lastName}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          {isEditing ? (
            <input
              type="password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            />
          ) : (
            <span>{userInfo.password}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          ) : (
            <span>{userInfo.email}</span>
          )}
        </div>
        <div>
          <label>Phone Number:</label>
          {isEditing ? (
            <input
              type="tel"
              value={userInfo.phoneNumber}
              onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
            />
          ) : (
            <span>{userInfo.phoneNumber}</span>
          )}
        </div>
        <div>
          <label>Address One:</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.addressOne}
              onChange={(e) => setUserInfo({ ...userInfo, addressOne: e.target.value })}
            />
          ) : (
            <span>{userInfo.addressOne}</span>
          )}
        </div>
        <div>
          <label>Address Two:</label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.addressTwo}
              onChange={(e) => setUserInfo({ ...userInfo, addressTwo: e.target.value })}
            />
          ) : (
            <span>{userInfo.addressTwo}</span>
          )}
        </div>
        <button onClick={isEditing ? handleSaveInfoClick : handleModifyInfoClick}>
          {isEditing ? 'Save Info' : 'Modify Info'}
        </button>
      </section>
      <section>
        <h2>Newsletter</h2>
        <div>
          <label>Want to join us:</label>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={handleNewsletterChange}
          />
        </div>
        <button>Save</button>
      </section>

      {/* Render the logout confirmation modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
};

export default Subpage;
