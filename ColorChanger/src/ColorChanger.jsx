import React, { useEffect } from 'react'
function ColorChanger(props) {
    function handleChange (color)
    {
      document.body.style.backgroundColor = color;
    }
    useEffect(()=>{
      document.body.style.backgroundColor = '#212121';
    },[]);
  return (
       <button onClick={()=> handleChange(props.color)} style={{backgroundColor:props.color}}> {props.color}</button> 
  )
}

export default ColorChanger