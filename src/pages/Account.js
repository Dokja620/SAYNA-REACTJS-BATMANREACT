// src/Game.js
import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div className="bg-account intro" style={{ height: '100vh' }}>
      <div className="login">
        <form>
          <h1>CONNEXION</h1>
          <p>Vous n'aver pas encore de compte?</p>
          <Link to="/registration">
            <p style={{textDecoration: 'underline'}}>Inscrivez vous ici</p>
          </Link>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              // Add event handlers and state management for form input
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="mot de passe"
              // Add event handlers and state management for form input
            />
            <div className="forgot">
              <p style={{textDecoration: 'underline', fontSize: '.8em', cursor: 'pointer'}}
              >Mot de passe oublié</p>
            </div>
          </div>
          <Link to="/dashboard">
              <button>valider</button>
        </Link>
          <div className="forgot">
            <p>Connectez vous avec</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Game;
