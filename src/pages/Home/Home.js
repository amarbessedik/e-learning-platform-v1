import React from 'react';
import Hero from '../../components/Hero/Hero';
import SubjectList from '../../components/Subjects/SubjectList';
import Partners from '../../components/Partners/Partners';
import './Home.css';

const Home = () => {
    return (
      <div className="home">
        {/* hero with search*/}
        <div className="hero__wrapper">
          <Hero />
        </div>
        {/* partners */}
        <div className="partners__wrapper">
          <Partners />
        </div>
        {/* popular subjects */}
        <div className="subjects__wrapper">
          <h1 className="popular__subjects">Popular subjects</h1>
          <SubjectList />
        </div>
      </div>
    );
}

export default Home;
