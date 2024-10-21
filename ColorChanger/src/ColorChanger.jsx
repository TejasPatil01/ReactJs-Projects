import React, { useEffect } from 'react'
function ColorChanger(props) { // Taking prop as color name
    function handleChange (color)   // Handle the color
    {
      document.body.style.backgroundColor = color;
    }
    useEffect(()=>{
      document.body.style.backgroundColor = '#212121'; // Adding default color as #212121, We can also handle by using css too.
    },[]);
  return (
       <button onClick={()=> handleChange(props.color)} style={{backgroundColor:props.color}}> {props.color}</button> //Button geting Color name and bg color from props
  )
}

export default ColorChanger