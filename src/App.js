import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavbarPart from './pages/navbar'
import BusinessPage from './pages/BusinessPage'
import EntertainmentPage from './pages/EntertainmentPage'
import SportPage from './pages/SportPage'

function App() {

  return (
    <>
      <Router>
        <NavbarPart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/sport" element={<SportPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
