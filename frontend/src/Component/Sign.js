import React, { Component } from 'react'
import './Sign.css'
import $ from 'jquery'
// import gsap from 'react-gsap'
import {TweenMax,Sine} from 'gsap'

export default class Sign extends Component {


componentDidMount(){
    $('#login-button').click(function(){
        $('#login-button').fadeOut("slow", function(){
          $('#container').fadeIn();
          TweenMax.from('#container', .4, { scale: 0, ease: Sine.easeInOut});
          TweenMax.to("#container", .4, {scale: 1, ease: Sine.easeInOut});
        });
      });
      
      $('.close-btn').click(function(){
         TweenMax.from('#container', .4, { scale: 1, ease: Sine.easeInOut});
        TweenMax.to("#container", .4, {left: "0px", scale: 0, ease: Sine.easeInOut});
        $('#container, #forgotten-container').fadeOut(800, function(){
          $('#login-button').fadeIn(800);
        });
      });
      
      $('#forgotten').click(function(){
        $('#container').fadeOut(function(){
          $('#forgotten-container').fadeIn();
        });
      });

}




    render() {
        return (
            <div>
             <div id="login-button">
  <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt="" />
</div>
<div id="container">
  <h1>Log In</h1>
  <span class="close-btn">
    <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt="" />
  </span>
  <form action="">
    <input type="email" name="email" placeholder="E-mail" />
    <input type="password" name="pass" placeholder="Password" />
    <a href="#">Log in</a>
    <div id="remember-container">
      <input type="checkbox" id="checkbox-2-1" class="checkbox" checked="checked" />
      <span id="remember">Remember me</span>
      <span id="forgotten">Forgotten password</span>
    </div>
  </form>
</div>
<div id="forgotten-container">
  <h1>Forgotten</h1>
  <span class="close-btn">
    <img src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png" alt="" />
  </span>
  <form action="">
    <input type="email" name="email" placeholder="E-mail" />
    <a href="#" class="orange-btn">Get new password</a>
  </form>
</div>   


            </div>
        )
    }
}