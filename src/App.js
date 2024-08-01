import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
