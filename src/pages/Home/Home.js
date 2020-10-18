import React from 'react';
import Hero from '../../components/Hero/Hero';
import SubjectList from '../../components/Subjects/SubjectList';
import Partners from '../../components/Partners/Partners';
import './Home.css';
import Featured from '../../components/Featured/Featured';

const Home = () => {
    return (
      <div className="home">
        {/* hero with search*/}
        <div className="hero__wrapper">
          <Hero />
        </div>
        {/* hero with search*/}
        <div className="featured__wrapper">
          <Featured />
        </div>
        {/* partners */}
        <div className="partners__wrapper">
          <Partners />
        </div>
        {/* popular subjects */}
        <div className="subjects__wrapper">
          <h2 className="popular__subjects">Popular subjects</h2>
          <SubjectList />
        </div>
      </div>
    );
}

export default Home;
