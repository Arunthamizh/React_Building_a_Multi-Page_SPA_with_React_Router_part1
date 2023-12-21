import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Products from '../pages/Products'

const Routers = () => {
  return (
    <div>
        <Routes>
           <Route path="/welcome" element={<Welcome/>}/>
           <Route path="/Products" element={<Products/>} />
        </Routes>
    </div>
  )
}

export default Routers