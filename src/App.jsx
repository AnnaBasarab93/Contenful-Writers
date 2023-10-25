import GetWriters from './components/GetWriters'
import SinglePost from './components/SinglePost'
import RegistrationForm from './components/RegistrationForm'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'

function App() {
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<GetWriters />} />
      <Route path='singlepost/:id' element={<SinglePost />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/login' element={<Login />} />

    </Routes>
    </>
  )
}

export default App
