import GetApi from './components/GetApi';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<GetApi/>} />
      <Route path='post/:id' />
    </Routes>
    </>
  )
}

export default App
