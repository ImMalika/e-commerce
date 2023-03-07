import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login"
import { Layout } from './components/layout/layout';
import { useState } from 'react';
function App() {
   const [theme,setTheme]=useState("light");

  return (
    <div>
      <Layout mode={theme} theme={setTheme}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
