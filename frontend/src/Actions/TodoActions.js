import axios from "axios"
import React, { useEffect, useState } from 'react'


export var createTodo = (t)=>{
    return {
        type:"ADD_TODO",
        payload:t
    }
}

export var increaseCTR =(value)=>{
    return (dispatch)=>{

     
            dispatch({  type:"INC_CTR", payload:value });
         


    }
    
    
    
}





      

export var postapi =(value)=>{
    return (dispatch)=>{

        dispatch({  type:"LOADING_TRUE" })
        

        
axios.post('http://localhost:9000/showproducts',value).then(
        (res) => {

     
    
        dispatch({  type:"POST_API",payload:res.data.msg})

        dispatch({type:"LOADING_FALSE"}) 

            console.log("statusok todo actions component")
        }
    ).catch(res => {
        alert("sorry you got an error from todoactions  post api");
        })   

    }
    
    
    
}



 



export var selectProduct =(value)=>{
    return (dispatch)=>{

        dispatch({  type:"LOADING_TRUE" })


 

     
        dispatch({  type:"Select_Product",payload:value})

        dispatch({type:"LOADING_FALSE"}) 

            console.log("statusok todo actions component")
        }
   

    }
    
   
    


       
 
export var addToCart =(value)=>{
    return (dispatch)=>{


        dispatch({  type:"LOADING_TRUE" })
console.log(value)

    axios.post('http://localhost:9000/shopingcart1',value).then(
        (res) => {

console.log(res.data.msg.ops[0])

        dispatch({  type:"Add_To_Cart",payload:res.data.msg.ops[0]})

        dispatch({type:"LOADING_FALSE"}) 

            console.log("status ok todo actions of shoping cart component")
        }
    ).catch(res => {
        alert("sorry you got an error from todoactions  shopping cart  api");
        })   
        


    }
      
    
    
}
    

export var deleteTodo = (t_id)=>{
    console.log(t_id)
    return {
        type:"DELETE_TODO",
        payload:t_id
    }
}

 

export var decreaseCTR =(value)=>{
    return (dispatch)=>{

     
            dispatch({  type:"DEC_CTR", payload:value });
         


    }
    
    
    
}



export var CreateUser =(value)=>{
    return (dispatch)=>{

        dispatch({  type:"LOADING_TRUE" })

console.log(value)


    axios.post('http://localhost:9000/login',value).then(
        (res) => {
console.log(res.data.msg[0])
        // dispatch({  type:"Add_NEW_USER",payload:res.data.msg.ops[0]})
        dispatch({  type:"Add_NEW_USER",payload:res.data.msg[0]})


        dispatch({type:"LOADING_FALSE"}) 

            console.log("status ok user action of create new user")
        }
    ).catch(res => {
        alert("sorry you got an error from useractions  create student  api");
        })   
        


    }
    
    
    
}




export var hideLoginComp =(value)=>{
    return (dispatch)=>{

     
            dispatch({  type:"HID_COMP", payload:value });
         


    }
    
    
    
}