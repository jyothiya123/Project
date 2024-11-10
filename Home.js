import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
       
        <nav className="top-nav">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
          </ul>
        </nav>
      </header>

      <main>
      <section className="hero">
   <b><h3 id="hero-title">Discover Delicious Recipes!</h3></b> 
    <p>Explore our vast collection of recipes from around the world.</p>
    <button id="get-started-btn">Browse Recipes</button>
</section>

        
      </main>
    </div>
  );
};

export default Home;
