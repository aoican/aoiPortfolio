import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './home/index'; // Import HomePage component
import './App.css';

function App() {
  return (
    <Router>    
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
