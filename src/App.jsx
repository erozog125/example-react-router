import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Layouts/Header/Header'
import { Navbar } from './components/Layouts/Navbar/Navbar'
import { Home } from './components/Pages/Home/Home'
import { AboutMe } from './components/Pages/AboutMe/AboutMe'
import { ContactMe } from './components/Pages/ContactMe/ContactMe'
import { Portfolio } from './components/Pages/Portfolio/Portfolio'
import { NotFound } from './components/NotFound/NotFound'

function App() {

  return (
    <>
      <Header>
        <h1 className='text-5xl w-1/4 ml-12 text-sky-400 font-extrabold'>Edwin dev</h1>
        <Navbar />
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />        
        <Route path='/aboutme' element={<AboutMe />} />        
        <Route path='/contactme' element={<ContactMe />} />        
        <Route path='/portfolio' element={<Portfolio />} />        
        <Route path='*' element={<NotFound />} />        
      </Routes>      
    </>
  )
}

export default App
