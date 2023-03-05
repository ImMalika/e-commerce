import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login"
import { Layout } from './components/layout/layout';

function App() {
  return (
    <div>
      <Layout>
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
