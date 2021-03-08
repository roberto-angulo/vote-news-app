import React from 'react'
import { MenuHeaderSection } from './components/HOC/sections/indexExport';
import { BrowserRouter as Router } from "react-router-dom";
import RouterAppPages from './components/HOC/RouterAppPages';
import FooterSection from './components/HOC/sections/FooterSection';

function App() {
  return (
    <Router>
        <MenuHeaderSection />
        <RouterAppPages />
        <FooterSection />
    </Router>
  );
}
export default App;
