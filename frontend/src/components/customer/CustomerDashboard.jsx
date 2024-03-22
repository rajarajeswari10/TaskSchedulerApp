import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../styles/CustomerDashboard.css';

const CustomerDashboard = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="dashboard-container">
      <h2>Fixit</h2>
      <nav className="dashboard-nav">
        <ul>
          <li className={activeItem === 1 ? "active" : ""} onClick={() => handleItemClick(1)}>
            <span>
              <i className="bi bi-house"></i> &nbsp; &nbsp;
              <span>Home</span>
            </span>
          </li>
          <li className={activeItem === 2 ? "active" : ""} onClick={() => handleItemClick(2)}>
            <span>
              <i className="bi bi-list"></i> &nbsp; &nbsp;
              <span>Closed Requests</span>
            </span>
          </li>
          <li className={activeItem === 3 ? "active" : ""} onClick={() => handleItemClick(3)}>
            <span>
              <i className="bi bi-person-circle"></i> &nbsp; &nbsp;
              <span>Profile</span>
            </span>
          </li>
          <li className={activeItem === 4 ? "active" : ""} onClick={() => handleItemClick(4)}>
            <span>
              <i className="bi bi-box-arrow-right"></i> &nbsp; &nbsp;
              <span>Logout</span>
            </span>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        {activeItem === 1 && (
          <div>
            <h3>Welcome back, John</h3>
          </div>
        )}
        {activeItem === 2 && (
          <div className="requests-section">
            <h3 className="requests-heading">Requests</h3>
            <Link to="/NewRequest"><button className="newrequest-btn">New Request</button></Link>
          </div>
        )}
        {activeItem === 3 && (
          <div>
            <h3>Profile Section</h3>
            <p>This is the content for the Profile section.</p>
          </div>
        )}
        {activeItem === 4 && (
          <div>
            <h3>Logout Section</h3>
            <p>This is the content for the Logout section.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerDashboard;
