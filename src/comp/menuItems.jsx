
// import data from './data'
import React from "react"
import axios from "axios"
import cartImg from "../assets/images/images.png"
import { Link } from "react-router-dom"
import { MyContext } from "../App"
import Categories from "./categories"
import bg from "../assets/images/eatoesBackground.png"
import bg1 from "../assets/images/enhanced_background_texture_with_grain.png"
 function MenuItems(){
   const{cart,setCart,quantities,increase,decrease}=React.useContext(MyContext)
   const[color,setColor]=React.useState(2)
   const[data,setData]=React.useState()
   const[alert,setAlert]=React.useState(false)

    // console.log(data)
    function handleClick(id){
          let selected=data.find(item=>item.id===id)
          setCart(prev=>[...prev,selected])
          setAlert(true)
          setTimeout(() => {
            setAlert(false)
          }, 4000);
          
          
         
    }
    React.useEffect(()=>{
         axios.get("https://eatoes-assignment-backend.onrender.com/")
         .then((dat)=>setData(dat.data))
         const img=new Image()
         img.src=bg
         img.src=bg1
        
    },[])

     
    console.log(Object.keys(quantities))
    if(data===undefined||data.length===0) return <h3>Lodingggg!!</h3>
    return(
        <>
        <div className="cart-img">
         <Link to="/cart"> <img src={cartImg}></img></Link>
          {cart.length>0&&<div className="cart-count">
            <p>{cart.length}</p>
          </div>}

        </div>
        <div className="categories">
            <Categories setData={setData} color={color} setColor={setColor}/>
        </div>
        {data.map((foodData)=>{
            return(
                <div className="item-card" key={foodData.id}> 
                <div className="item-det">
                    <img src={foodData.image}></img>
                    <p id='item-price'>₹{foodData.price}</p>
                    <p id="item-name">{foodData.name}</p>
                    <p>{foodData.description}</p>
    
                </div>
                <div className="item-btn">
                    <div className="quantity-info">
                    <button onClick={()=>{decrease(foodData.id)}} id="quantity-btn"><span>-</span></button>
                        <p>{Object.keys(quantities).includes(foodData.id)?quantities[foodData.id]:1}</p>
                        <button onClick={()=>{increase(foodData.id)}} id="quantity-btn"><span>+</span></button>

                    </div>
                    <button onClick={()=>{handleClick(foodData.id)}}>Add to Cart</button>
    
                </div>
    
            </div>
            )
        })}
        {alert&&<div key={cart.length} className="alert-msg">
            <span>Item Added To Cart</span>
        </div>}
       
        </>
    )
}


export default MenuItems