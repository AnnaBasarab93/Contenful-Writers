import GetWriters from './components/GetWriters'
import SinglePost from './components/SinglePost'
import RegistrationForm from './components/RegistrationForm'
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
    </Routes>
    </>
  )
}

export default App
