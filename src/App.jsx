// import './App.css'
import { ArchivedNoteses } from './pages/ArchivedNoteses'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'
import { ImportantNotese } from './pages/ImportantNoteses'
import { DeletedNotes } from './pages/DeletedNotes'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/archive' element={<ArchivedNoteses />} />
        <Route path='/important' element={<ImportantNotese />} />
        <Route path='/bin' element={<DeletedNotes />} />
      </Routes>
    </>
  )
}

export default App
