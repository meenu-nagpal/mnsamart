import axios from "axios"
import React, { useEffect, useState } from 'react'



export var CreateUser =(value)=>{
    return (dispatch)=>{

        dispatch({  type:"LOADING_TRUE" })

alert(value)
console.log(value)


    axios.post('http://localhost:9000/create_user',value).then(
        (res) => {
        alert(res);

     console.log(res)
        dispatch({  type:"Add_NEW_USER",payload:value})

        dispatch({type:"LOADING_FALSE"}) 

            console.log("status ok user action of create new user")
        }
    ).catch(res => {
        alert("sorry you got an error from useractions  create student  api");
        })   
        


    }
    
    
    
}