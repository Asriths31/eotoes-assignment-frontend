import React from 'react'
import './App.css'
import Menu from './comp/menu'
import Cart from './comp/cart'
import {Routes,Route,BrowserRouter} from "react-router-dom"
export const MyContext=React.createContext()

function App() {
     const[cart,setCart]=React.useState([])

    return(
      <>
      <MyContext.Provider value={{cart,setCart}}>
       
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
