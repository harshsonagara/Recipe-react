import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import About from '../pages/About'
import Create from '../pages/Create'
import { Route , Routes } from 'react-router-dom'
const Mainroute = () => {
  return (
    <>
      <Routes >

        <Route path="/" element={<Home />}/>   
        <Route path="/About" element={<About />}/>
        <Route path="/Recipe" element={<Recipe />}/>
        <Route path="/Create" element={<Create />}/>
        
      </Routes>
    </>
  )
}

export default Mainroute