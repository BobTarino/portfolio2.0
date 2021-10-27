// center of application - root component 
// **You need to import React in every component file. 
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';




// App Logic
function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {name: 'About'},
    { name: 'Portfolio'},
    { name: 'Resume'},
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
      >
      </Header>
      <main>
        {!contactSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
