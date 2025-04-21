import axios from "axios"
import React from "react"


function Categories(props){
  
      function handleClick(e){
        console.log("clicked",e.target.className==="appetite")
        props.setData([])
        axios.get(`https://eatoes-assignment-backend.onrender.com/${e.target.className}`)
        .then((dat)=>{props.setData(dat.data)
        })
        .catch((err)=>console.log(err))
       

        
      }

    console.log(props.color)
    return(
        <>
        <button onClick={(e)=>{handleClick(e);props.setColor(1)}} style={props.color===1?{backgroundColor:"rgb(248, 128, 72)",color:"white"}:{backgroundColor:"#eee8d0"}} className="appetite">Appetites</button>
        <button onClick={(e)=>{handleClick(e);props.setColor(2)}} style={props.color===2?{backgroundColor:"rgb(248, 128, 72)",color:"white"}:{backgroundColor:"#eee8d0"}} className="/">Main Course</button>
        <button onClick={(e)=>{handleClick(e);props.setColor(3)}} style={props.color===3?{backgroundColor:"rgb(248, 128, 72)",color:"white"}:{backgroundColor:"#eee8d0"}} className="desserts">Desserts</button>
        </>
    )
}

export default Categories