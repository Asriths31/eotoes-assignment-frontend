
import React from "react"
import { MyContext } from "../App"
import Order from "./order"
import home from "../assets/images/home.png"
import { Link } from "react-router-dom"
// import chicken from "../assets/images/paneer.jpg"
function Cart(){
    let total=0
    const{cart}=React.useContext(MyContext)
    const[toggle,setToggle]=React.useState(false)
    console.log(cart)
    cart.forEach(element => {
        total=total+element.price
         
    });

    function handleClick(){
       setToggle(true)
       console.log("clicked")
    }
    
    
    return(
        <>
        <h2 className="cart-head">Your Items</h2>
        <Link to="/"><button className="home-btn"><img src={home} ></img></button></Link>
        <div className="cart-card">
            {toggle?<Order cart={cart}></Order>
            :<div>{cart.map(item=>{
               return( <div key={item.id} className="cart-items">
                <img src={item.image}></img>
                <div>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                </div>
                <h2>₹{item.price}</h2>
 
             
             </div>)
            })}
            <div className="total-amt">
                <button onClick={handleClick}>Buy now</button>
                <div>
                <h2>Total</h2>
                <h2>₹{total}</h2>
                </div>
            </div>
            </div>
            }

            
           
        </div>
        </>
       
    )
}

export default Cart