import axios from "axios"
import React, { useEffect, useState } from 'react'


export var createTodo = (t)=>{
    return {
        type:"ADD_TODO",
        payload:t
    }
}

export var deleteTodo = (t_id)=>{
    return {
        type:"DELETE_TODO",
        payload:t_id
    }
}

export var increaseCTR =(value)=>{
    return (dispatch)=>{

     
            dispatch({  type:"INC_CTR", payload:value });
         


    }
    
    
    
}





// useEffect((k) => {
//axios.get('http://localhost:9000/showproducts').then(
//         (res) => {
//         alert(" todo action post api");
//         console.log(k)

     
//         dispatch({  type:"post_api",payload:res.data })


//             console.log("statusok todo actions component")
//         }
//     ).catch(res => {
//         alert("sorry you got an error from todoactions post api");
//         })   
// }, [])

      

export var postapi =(value)=>{
    return (dispatch)=>{

        dispatch({  type:"LOADING_TRUE" })


        
axios.post('http://localhost:9000/showproducts',value).then(
        (res) => {
        alert(" todo action post api");

     
    
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

alert(value)
console.log(value)


    axios.post('http://localhost:9000/shopingcart1',value).then(
        (res) => {

            alert("shopingcart128")
        alert(res);
console.log(res.data.msg.ops[0])
    //  console.log(res.data.data.msg.ops)

        // dispatch({  type:"Add_To_Cart",payload:value})
        dispatch({  type:"Add_To_Cart",payload:res.data.msg.ops[0]})


        dispatch({type:"LOADING_FALSE"}) 

            console.log("status ok todo actions of shoping cart component")
        }
    ).catch(res => {
        alert("sorry you got an error from todoactions  shopping cart  api");
        })   
        


    }
    
    
    
}
    

    
    