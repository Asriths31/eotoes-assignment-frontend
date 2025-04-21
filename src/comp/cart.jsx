
import React from "react"
import { MyContext } from "../App"
import Order from "./order"
import home from "../assets/images/home.png"
import { Link } from "react-router-dom"
import delete1 from "../assets/images/delete.png"
// import chicken from "../assets/images/paneer.jpg"
function Cart(){
    let total=0
    const{cart,quantities,increase,decrease,setCart}=React.useContext(MyContext)
    const[toggle,setToggle]=React.useState(false)
    const[empty,setEmpty]=React.useState(true)
    console.log(cart)
    cart.forEach(element => {

        total=total+(element.price*(quantities[element.id]||1))
         
    });
    console.log(quantities)

    function handleClick(){
       setToggle(true)
       console.log("clicked")
    }
    function handleDelete(id){
        console.log(id)
        setCart((prev)=>(prev.filter(ele=>ele.id!==id)))
    }
    React.useEffect(()=>{
        if(total===0) setEmpty(true)
        else setEmpty(false)
    },[])
    
    return(
        <>
        <h2 className="cart-head">Your Items</h2>
        <Link to="/"><button className="home-btn"><img src={home} ></img></button></Link>
        <div className="cart-card">
            {toggle?<Order cart={cart}></Order>
            :<div>{cart.map(item=>{
               return( <div key={item.id} className="cart-items">
                <div className="quantity-cart">
                    <img src={item.image}></img>
                    <div >
                    <button onClick={()=>{decrease(item.id)}} id="quantitiy-btn"><span>-</span></button>
                        <p>{Object.keys(quantities).includes(item.id)?quantities[item.id]:1}</p>
                        <button onClick={()=>{increase(item.id)}} id="quantitiy-btn"><span>+</span></button>

                    </div>
                </div>
                <span></span>
                <div className="cart-des">
                 <h3>{(quantities[item.id]||1)} x {item.name}</h3>
                 <p>{item.description}</p>
                </div>
                <div className="delete-btn">
                <h2>₹{(quantities[item.id]||1)*item.price}</h2>
                <img src={delete1} onClick={()=>{handleDelete(item.id)}}></img>
                </div>
             
             </div>)
            })}
           { empty?<div><h2>Your cart is Empty,Please Add Items From the <span><Link to="/">Menu</Link></span></h2></div>:<div className="total-amt">
                <button onClick={handleClick}>Buy now</button>
                <div>
                <h2>Total</h2>
                <h2>₹{total}</h2>
                </div>
            </div>}
            </div>
            }

            
           
        </div>
        </>
       
    )
}

export default Cart