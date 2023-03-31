import { useState, useEffect,useReducer } from 'react';
import axios from "axios"



 const initState={
   name:"",
   title:"",
   image:"",
   price:"",
   category:"",
   size:"",
   brand:"",
   type:"",
   color:""

}



const reducer=(state,action)=>{
switch(action.type){

  case "CHANGE_INPUT":{
    return{
      ...state,
      [action.payload.name]: action.payload.value
    }
  }
  default:{
    throw new Error("Action Invalid")
  }
}
}








function Admin() {
const [state,dispatch]=useReducer(reducer,initState)
const addData=(state)=>{
  axios.post(`http://localhost:3000/ecommerce`,state)
  .then((res)=>{
    console.log(res)
  })
}
const handelsubmit=(e)=>{
  e.preventDefault()
  console.log(state)
  addData(state)
}

const handlechange=(e)=>{

  console.log(e.target.name,e.target.value)
  dispatch({
    type:"CHANGE_INPUT",
    payload:{
      name:e.target.name,
      value:e.target.value
    }
  })
}
const {name,title,image,price,category,size,brand,type,color}=state
  return (<>

  
<form onSubmit={handelsubmit}>

    <input name="name" value={name} placeholder='Enter your product name' onChange={handlechange}/>
    <br/>
    <input name="title" value={title} placeholder='Enter title' onChange={handlechange}/>
    <br/>
    <input name="image" value={image} placeholder='Enter Image Src'  onChange={handlechange}/>
    <br/>
    <input name="price" value={price} placeholder='Enter Price' onChange={handlechange}/>
    <br/>
    <select  name="category" value={category} placeholder='Select Category' onChange={handlechange}>
      <option>MEN</option>
      <option>WOMEN</option>
      <option>KIDS</option>      
      <option>CAMP & HIKE</option>
      <option>CLIMB</option>
      <option>SNOW</option>
      <option>CYCLE</option>
    </select>
    <br/>
    <input name="size" value={size} placeholder='Enter size'  onChange={handlechange}/>
    <input name="brand" value={brand} placeholder='Enter brand name'  onChange={handlechange}/>
    <input name="type" value={type} placeholder='Enter type of product'  onChange={handlechange}/>
    <input name="color" value={color} placeholder='Enter color'  onChange={handlechange}/>
    <br/>
    <input value={"ADD product"} type="submit" />
 
          </form>
            </>
  );
}


export default Admin