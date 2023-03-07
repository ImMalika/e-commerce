import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home";
import { Layout } from './components/layout/layout';
import { useState } from 'react';
import { Single } from './pages/single/single';
import { Categ } from './pages/categ/categ';

function App() {
   const [theme,setTheme]=useState("light");

  return (
    <div>
      <Layout mode={theme} theme={setTheme}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/categ' element={<Categ />} />
          <Route path='/singleProduct' element={<Single/>} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
