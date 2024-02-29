import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboared';
import Error from './components/Error';
import Login from './components/Login';

function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}
export default App;
