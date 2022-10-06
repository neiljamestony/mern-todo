import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
