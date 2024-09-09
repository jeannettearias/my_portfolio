
import '../styles/App.scss';

import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

import { Routes, Route } from 'react-router-dom';
import NewProject from './pages/NewProject';
import { useEffect, useState } from 'react';

function App() {

  //Global state to hold JSON data
  const [jsonData, setJsonData] = useState([]);

  // Load JSON data on component mount
  useEffect(() => {
    fetchData();

  }, []);

  // Function to fetch the JSON data
  const fetchData = async () => {
    try {
      const response = await fetch('/data.json'); // Adjust the path as necessary
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  };



  //HTML
  return (
    <div className='page darkmode'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newproject'
            element={<NewProject jsonData={jsonData} />} />
          <Route path='/projects'
            element={<Projects jsonData={jsonData} />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
