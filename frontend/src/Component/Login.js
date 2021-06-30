import React, { Component } from 'react'
import './Login.css'
import $ from 'jquery'

export default class Login extends Component {


componentDidMount(){
    $(document).ready(function(){
        $(".login").hide();
        $(".register_li").addClass("active");

        $(".login_li").click(function(){
          $(this).addClass("active");
          $(".register_li").removeClass("active");
          $(".login").show();
           $(".register").hide();
        })

        $(".register_li").click(function(){
          $(this).addClass("active");
          $(".login_li").removeClass("active");
          $(".register").show();
           $(".login").hide();
        })
    });

}



    render() {
        return (
            <div>
                
                <div class="wrapper">
  <div class="left">
      <h3>Rocket Station</h3>   
    <img src="https://i.imgur.com/eN4AKys.png" alt="Rocket_image"/>
  </div>
  <div class="right">
    <div class="tabs">
      <ul>
        <li class="register_li">Register</li>
        <li class="login_li">login</li>
      </ul>
    </div>
    
    <div class="register">
      <div class="input_field">
        <input type="text" placeholder="Username" class="input" />
      </div>
      <div class="input_field">
        <input type="text" placeholder="E-mail" class="input" />
      </div>
      <div class="input_field">
        <input type="password" placeholder="Password" class="input" />
      </div>
      <div class="btn"><a href="#">Register</a></div>
    </div>
    
    <div class="login">
      <div class="input_field">
        <input type="text" placeholder="E-mail" class="input" />
      </div>
      <div class="input_field">
        <input type="password" placeholder="Password" class="input" />
      </div>
      <div class="btn"><a href="#">Login</a></div>
    </div>
    
  </div>
</div>


            </div>
        )
    }
}


{/* // <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<title>Register-login Form</title>
// 	<link rel="stylesheet" href="styles.css">
// 	<script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
// 	<script>
		
// 	</script>
// </head> */}

