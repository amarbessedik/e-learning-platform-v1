import React from 'react';
import './Home.css';

const Home = () => {
    return (
      <div className="home">
        {/* hero with search*/}
        <div className="hero__wrapper">
          <h1>Hero</h1>
        </div>
        {/* partners */}
        <div className="partners__wrapper">
          <h1>Partner</h1>
        </div>
        {/* popular subjects */}
        <div className="subjects__wrapper">
          <h1 className="">Popular subjects</h1>
        </div> 
      </div>
    );
}

export default Home;
