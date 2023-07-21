import React from 'react';
import { Link } from 'react-router-dom';
import inspiration from "../assets/images/inspiration.jpeg";
import countdown from "../assets/images/countdown.jpeg";
import venue from "../assets/images/venue.jpeg";


const Home = () => {
  return (
    <>
      <div className="hero">
        <h1 className="text-gradient logo">Hitched & G-G-G-Glitched</h1>
        <h2 className="text-gradient sublogo">Calm your motherboard!</h2>
        <img src="robot.png" width="200px" alt="Robot wearing a veil"></img>
        <p className="text-gradient description"> My name is B-B-Belle. I have been imported here to help you not stress about the HOPEfully happiest day of your life. This site holds many g-goodies to help you organize and navigate your thoughts so you dont b-b-burn your circuits</p>
      </div>
      <div className="flex-container">
        <div className="homepage-card">
          <a href="/inspiration">
            <img src={inspiration} alt="Inspiration" />
            <div className="overlay">
              <div className="overlay-text">
                Search for Inspiration
              </div>
            </div>
          </a>
        </div>
        <div className="homepage-card">
          <Link to="/countdown" className="navigation-link">
            <img src={countdown} alt="Wedding Countdown" />
            <div className="overlay">
              <div className="overlay-text">
                Countdown to the big day!
              </div>
            </div>
          </Link>
        </div>
        <div className="homepage-card">
          <Link to="/venues-and-vendors" className="navigation-link">
            <img src={venue} alt="Search Venues and Vendors" />
            <div className="overlay">
              <div className="overlay-text">
                Search for Venues or Vendors
              </div>
            </div>
          </Link>
        </div>
        <div className="homepage-card">
          <Link to="/budget" className="navigation-link">
            <img src="" alt="Wedding Budget" />
            <div className="overlay">
              <div className="overlay-text">
                Plan a Wedding Budget
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;