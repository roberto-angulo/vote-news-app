import React from 'react'
import { MenuHeaderSection } from './components/HOC/sections/indexExport';
import { BrowserRouter as Router } from "react-router-dom";
import RouterAppPages from './components/HOC/RouterAppPages';

function App() {
  return (
    <Router>
        <MenuHeaderSection />
        <RouterAppPages />
    </Router>
  );
}
export default App;
