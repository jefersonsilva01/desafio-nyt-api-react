import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Trends from './components/Trends';
import Shared from './components/Shared';
import About from './components/About';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home to={"/search-results"} />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
