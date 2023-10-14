import GetWriters from './components/GetApi'
import SinglePost from './components/SinglePost'
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
    </Routes>
    </>
  )
}

export default App
