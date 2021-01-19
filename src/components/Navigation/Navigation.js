import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <Link to="/" className="navbar-brand">Kino</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Strona Główna</Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">Filmy</Link>
          </li>
          <li className="nav-item">
            <Link to="/seanses" className="nav-link">Seanse</Link>
          </li>
          <li className="nav-item">
            <Link to="/manage/movies" className="nav-link">Zarządzaj filmami</Link>
          </li>
          <li className="nav-item">
            <Link to="/manage/seanses" className="nav-link">Zarządzj senasami</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;