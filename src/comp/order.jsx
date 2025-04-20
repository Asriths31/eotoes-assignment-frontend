import React from "react"
import axios from "axios"
function Order(props){

    let name,phone
    const[toggle,setToggle]=React.useState(false)
    const[err,setErr]=React.useState(false)

    function handleSubmit(e){
        e.preventDefault()
        if(phone!==undefined&&phone.length===10){
            setToggle(true)
            setErr(false)
            axios.post("http://localhost:2000/user",{
                    user_name:name,
                    phone_no:phone,
                    orders:props.cart
                
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>console.log(res))
            .catch((err)=>console.log(err))
            axios.get("http://localhost:2000/userData",
                {phone:"phone"},
                {
                    headers:{
                        "content-type":"application/json"
                    }
                }
            ).then((userData)=>console.log(userData))


        }
        else{
            setErr(true)

        }

        console.log(name,phone)




    }
    return(
        <>
       {toggle?<div>
        <img></img>
        <h2>Order Confirmed</h2>
       </div>
       :<form onSubmit={handleSubmit}>
            <label >User Name</label>
            <input name="username" type="text" placeholder="Enter Your UserName" onChange={(e)=>name=e.target.value}></input>
            <label>Phone Number</label>
            <input name="phone-no" type="number" placeholder="Enter Your Phone No" onChange={(e)=>phone=e.target.value}></input>
            <input type="submit" value="Submit"></input>
        </form>}
        {err&&<p>Please only Enter 10 digits of the number</p>}
        </>
    )
}

export default Order