// center of application - root component 
// **You need to import React in every component file. 
import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'About',
      description: 'Rutgers University graduate with a degree in Communications. Junior Developer from River Edge, NJ. Now residing in Chicago, Il ',
    },
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume', description: 'Download Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
    </div>
  );
}

export default App;
