import React from 'react'
import './App.css'
import Menu from './comp/menu'
import Cart from './comp/cart'
import {Routes,Route,BrowserRouter} from "react-router-dom"
export const MyContext=React.createContext()

function App() {
     const[cart,setCart]=React.useState([])
     const [quantities, setQuantities] = React.useState({});
     function increase(id){
      setQuantities(prev => ({
        ...prev,
        [id]: (prev[id]?prev[id]+1:2)
      }))
    }
  
    function decrease(id) {
      setQuantities(prev => ({
        ...prev,
        [id]: Math.max((prev[id] || 0) - 1, 1)
      }))
    }

    return(
      <>
      <MyContext.Provider value={{cart,setCart,quantities,setQuantities,increase,decrease}}>
       
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Menu />} />
       <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>

    </>
    )
  
}

export default App
