import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home";
import { Layout } from './components/layout/layout';
import { useState } from 'react';
import { Single } from './pages/single/single';
import { Categ } from './pages/categ/categ';
import Korzinka from './pages/korzinka/korzinka';
import Message from './pages/message/message';
import Info from './pages/info/info';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Layout mode={theme} theme={setTheme}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/categ' element={<Categ />} />
          <Route path='/singleProduct' element={<Single />} />
          <Route path='/korzinka' element={<Korzinka />} />
          <Route path='/message' element={<Message />} />
          <Route path='/info' element={<Info />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
              </Layout>

    </div>
  );
}

export default App;
