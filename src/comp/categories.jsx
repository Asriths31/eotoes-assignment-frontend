import axios from "axios"
import React from "react"


function Categories(props){
      const[bgColor,setBgColor]=React.useState(2)
      function handleClick(e){
        console.log("clicked",e.target.className==="appetite")
        props.setData([])
        axios.get(`https://eatoes-assignment-backend.onrender.com/${e.target.className}`)
        .then((dat)=>props.setData(dat.data))
        .catch((err)=>console.log(err))
        setBgColor("woenwejngjn")

        
      }

    return(
        <>
        {bgColor}
        <button onClick={handleClick} style={bgColor===1?{backgroundColor:"rgb(255, 81, 0)",color:"white"}:{backgroundColor:"#eee8d0"}} className="appetite">Appetites</button>
        <button onClick={handleClick} style={bgColor===2?{backgroundColor:"rgb(255, 81, 0)",color:"white"}:{backgroundColor:"#eee8d0"}} className="/">Main Course</button>
        <button onClick={handleClick} style={bgColor===3?{backgroundColor:"rgb(255, 81, 0)",color:"white"}:{backgroundColor:"#eee8d0"}} className="desserts">Desserts</button>
        </>
    )
}

export default Categories