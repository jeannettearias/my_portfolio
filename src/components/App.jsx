import '../styles/App.scss';

import Header from './layout/Header';
import Landing from './Landing';
import Home from './layout/Home';
import Experience from './layout/Experience';
import Contact from './layout/Contact';
import Footer from './layout/Footer';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import expJson from '../data/exp.json';
import skillsJson from '../data/skills.json';
import achievementsJson from '../data/achievements.json';
import projectsJson from '../data/data.json';

function App() {
  // State for projects from JSON data
  const [projectsArray, setProjectsArray] = useState([]);
  // State for skills from JSON data
  const [skills, setSkills] = useState([]);
  // State for achievements from JSON data
  const [achievements, setAchievements] = useState([]);
  // State for active achievements
  const [activeAchievements, setActiveAchievements] = useState([]);
  // State for experience from JSON data
  const [exp, setExp] = useState([]);

  // Load JSON data on component mount
  useEffect(() => {
    // Set projects data from JSON file
    setProjectsArray(projectsJson);
    // Set experience data from JSON file
    setExp(expJson);
    // Set skills data from JSON file
    setSkills(skillsJson);
    // Set achievements data from JSON file
    setAchievements(achievementsJson);

    // Filter the data where active is true
    const filteredAchievements = achievementsJson[0].achievements.filter(item => item.active === true);
    setActiveAchievements(filteredAchievements);
  }, []);

  // HTML
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path='/' element={<Home
          skills={skills}
          achievements={achievements}
          activeAchievements={activeAchievements} />} />
        <Route path='/projects' element={<Landing
          projectsArray={projectsArray} />} />
        <Route path='/experience' element={<Experience
          exp={exp} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;