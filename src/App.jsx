import React, { useContext } from 'react';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import './App.css';
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white",color:darkMode && "white"}}>
      <p className="banner">kartik.</p>
      <Toggle/>
      <Intro />
      <About />
      <Skills />
      <Education />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App;
