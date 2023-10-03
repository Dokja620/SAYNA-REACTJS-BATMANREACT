// src/Game.js
import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div className="bg-account intro" style={{ height: '100vh' }}>
      <h1>CONNEXION</h1>
      <Link to="/registration">
        <button>Don't have an account, want to create one?</button>
      </Link>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            // Add event handlers and state management for form input
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            // Add event handlers and state management for form input
          />
        </div>
        <Link to="/dashboard">
            <button>Login</button>
      </Link>
      </form>
    </div>
  );
};

export default Game;
