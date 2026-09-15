import { useState } from 'react';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'projects' | 'contact'>('home');

  return (
    <div className="App">
      <header className="toolbar">
        <h1 className="toolbar-title">Yeng Her</h1>
      </header>

      <nav className="navbar">
        <button className="nav-link" onClick={() => setActiveTab('home')}>Home</button>
        <button className="nav-link" onClick={() => setActiveTab('about')}>About</button>
        <button className="nav-link" onClick={() => setActiveTab('projects')}>Projects</button>
        <button className="nav-link" onClick={() => setActiveTab('contact')}>Contact</button>
      </nav>

      <main className="content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;