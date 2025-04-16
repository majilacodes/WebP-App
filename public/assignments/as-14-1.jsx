import React, { useState } from 'react';

function ImageDisplay() {
  return (
    <div className="image-display">
      <h2>Image Display Component</h2>
      <div>
        <h3>a) Image from public/images folder</h3>
        <img 
          src="logo192.png" 
          alt="Sample from public folder" 
          width="300" 
        />
      </div>
      <div>
        <h3>b) Image from src/images folder</h3>
        <img 
          src="profileimage.png" 
          alt="Sample from src folder" 
          width="300" 
        />
      </div>
    </div>
  );
}

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    CityOfEmployment: '',
    webServer: '',
    role: 'Guest',
    singleSignOn: {
      email: false,
      payroll: false,
      selfService: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      singleSignOn: {
        ...formData.singleSignOn,
        [name]: checked
      }
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      CityOfEmployment: '',
      webServer: '',
      role: 'Guest',
      singleSignOn: {
        email: false,
        payroll: false,
        selfService: false
      }
    });
  };

  return (
    <div className="login-form">
      <h2>Novell Services Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label>City of Employment:</label>
          <input 
            type="text" 
            name="CityOfEmployment" 
            value={formData.CityOfEmployment} 
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label>Web server:</label>
          <select 
            name="webServer" 
            value={formData.webServer} 
            onChange={handleInputChange} 
          >
            <option value="">--Choose a server--</option>
            <option value="server1">Server 1</option>
            <option value="server2">Server 2</option>
            <option value="server3">Server 3</option>
          </select>
        </div>

        <div className="form-group">
          <label>Please specify your role:</label>
          <div className="radio-group">
            <div>
              <input 
                type="radio" 
                id="admin" 
                name="role" 
                value="Admin" 
                checked={formData.role === 'Admin'} 
                onChange={handleRoleChange} 
              />
              <label htmlFor="admin">Admin</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="engineer" 
                name="role" 
                value="Engineer" 
                checked={formData.role === 'Engineer'} 
                onChange={handleRoleChange} 
              />
              <label htmlFor="engineer">Engineer</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="manager" 
                name="role" 
                value="Manager" 
                checked={formData.role === 'Manager'} 
                onChange={handleRoleChange} 
              />
              <label htmlFor="manager">Manager</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="guest" 
                name="role" 
                value="Guest" 
                checked={formData.role === 'Guest'} 
                onChange={handleRoleChange} 
              />
              <label htmlFor="guest">Guest</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Single Sign-on to the following:</label>
          <div className="checkbox-group">
            <div>
              <input 
                type="checkbox" 
                id="email" 
                name="email" 
                checked={formData.singleSignOn.email} 
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input 
                type="checkbox" 
                id="payroll" 
                name="payroll" 
                checked={formData.singleSignOn.payroll} 
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="payroll">Payroll</label>
            </div>
            <div>
              <input 
                type="checkbox" 
                id="selfService" 
                name="selfService" 
                checked={formData.singleSignOn.selfService} 
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="selfService">Self-service</label>
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="profile-image">
      <img 
        src="/images/profileimage.png" 
        alt="User Profile" 
        className="avatar" 
      />
    </div>
  );
}

function UserInfo() {
  const userDetails = {
    name: "Mishti Mattu",
    email: "mishtimayank.mattu2023@vitstudent.ac.in",
    bio: "Software developer with 5 years of experience in React, HTML, CSS, JavaScript"
  };

  return (
    <div className="user-info">
      <h2>{userDetails.name}</h2>
      <p><strong>Email:</strong> {userDetails.email}</p>
      <p><strong>Bio:</strong> {userDetails.bio}</p>
    </div>
  );
}

function UserPosts() {
  const posts = [
    { id: 1, title: "Getting Started with React", content: "This is a beginner's guide to React." },
    { id: 2, title: "HTML", content: "Learn about HTML." },
    { id: 3, title: "CSS", content: "Learn about CSS." }
  ];

  return (
    <div className="user-posts">
      <h3>User Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <div className="profile-container">
        <ProfileImage />
        <div className="user-details">
          <UserInfo />
          <UserPosts />
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="app">
      <ProfilePage />
    </div>
  );
}

export function App() {
  const [activeTab, setActiveTab] = useState('imageDisplay');

  return (
    <div className="app-container">
      <h1>23BCE1067</h1>
      
      <div className="tabs">
        <button 
          className={activeTab === 'imageDisplay' ? 'active' : ''} 
          onClick={() => setActiveTab('imageDisplay')}
        >
          1. Image Display
        </button>
        <button 
          className={activeTab === 'loginForm' ? 'active' : ''} 
          onClick={() => setActiveTab('loginForm')}
        >
          2. Login Form
        </button>
        <button 
          className={activeTab === 'userProfile' ? 'active' : ''} 
          onClick={() => setActiveTab('userProfile')}
        >
          3. User Profile
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'imageDisplay' && <ImageDisplay />}
        {activeTab === 'loginForm' && <LoginForm />}
        {activeTab === 'userProfile' && <Index />}
      </div>
    </div>
  );
}

const styles = `
  .app-container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .tabs {
    margin-bottom: 20px;
  }
  
  .tabs button {
    padding: 10px 15px;
    margin-right: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .tabs button.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="password"],
  .form-group select {
    width: 300px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .radio-group,
  .checkbox-group {
    margin-top: 5px;
  }
  
  .radio-group div,
  .checkbox-group div {
    margin-bottom: 5px;
  }
  
  .form-buttons {
    margin-top: 20px;
  }
  
  .form-buttons button {
    padding: 8px 15px;
    margin-right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .form-buttons button[type="button"] {
    background-color: #6c757d;
  }
  
  .profile-container {
    display: flex;
    margin-top: 20px;
  }
  
  .profile-image {
    margin-right: 20px;
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .user-details {
    flex: 1;
  }
  
  .user-posts ul {
    padding-left: 0;
    list-style: none;
  }
  
  .user-posts li {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 4px;
  }
  
  .user-posts h4 {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement); 