import React, { useEffect } from 'react'
import './Notification.css';

export default function Notification() {

useEffect(() => {
    (function(){

        /*
        * Get all the buttons actions
        */
        let optionBtns = document.querySelectorAll( '.js-option' );
      
        for(var i = 0; i < optionBtns.length; i++ ) {
      
          /*
          * When click to a button
          */
          optionBtns[i].addEventListener( 'click', function ( e ){
      
            var notificationCard = this.parentNode.parentNode;
            var clickBtn = this;
            /*
            * Execute the delete or Archive animation
            */
            requestAnimationFrame( function(){ 
      
              archiveOrDelete( clickBtn, notificationCard );
      
              /*
              * Add transition
              * That smoothly remove the blank space
              * Leaves by the deleted notification card
              */
              window.setTimeout( function( ){
                requestAnimationFrame( function() {
                  notificationCard.style.transition = 'all .4s ease';
                  notificationCard.style.height = 0;
                  notificationCard.style.margin = 0;
                  notificationCard.style.padding = 0;
                });
      
                /*
                * Delete definitely the animation card
                */
                window.setTimeout( function( ){
                  notificationCard.parentNode.removeChild( notificationCard );
                }, 1500 );
              }, 1500 );
            });
          })
        }
      
        /*
        * Function that adds
        * delete or archive class
        * To a notification card
        */
        var archiveOrDelete = function( clickBtn, notificationCard ){
          if( clickBtn.classList.contains( 'archive' ) ){
            notificationCard.classList.add( 'archive' );
          } else if( clickBtn.classList.contains( 'delete' ) ){
            notificationCard.classList.add( 'delete' );
          }
        }
      
      })() 
}, [])




    return (
        <div>
          <div class="wrapper">

<div class="notifications">

  <div class="notifications__item">
    <div class="notifications__item__avatar">
      <img src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_1.jpg" />
    </div>

    <div class="notifications__item__content">
      <span class="notifications__item__title">Verdieu Steeve</span>
      <span class="notifications__item__message">Just started following you</span>
    </div>

    <div>
      <div class="notifications__item__option archive js-option">
        <i class="fas fa-folder"></i>
      </div>
      <div class="notifications__item__option delete js-option">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  </div>

  <div class="notifications__item">
    <div class="notifications__item__avatar">
      <img src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_2.jpg" />
    </div>

    <div class="notifications__item__content">
      <span class="notifications__item__title">Mikes Miles</span>
      <span class="notifications__item__message">Just liked your video story</span>
    </div>

    <div>
      <div class="notifications__item__option archive js-option">
        <i class="fas fa-folder"></i>
      </div>
      <div class="notifications__item__option delete js-option">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  </div>


  <div class="notifications__item">
    <div class="notifications__item__avatar">
      <img src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_3.jpg" />
    </div>

    <div class="notifications__item__content">
      <span class="notifications__item__title">Helen Saga</span>
      <span class="notifications__item__message">Added you to a todos list for tomorrow</span>
    </div>

    <div>
      <div class="notifications__item__option archive js-option">
        <i class="fas fa-folder"></i>
      </div>
      <div class="notifications__item__option delete js-option">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  </div>

  <div class="notifications__item">
    <div class="notifications__item__avatar">
      <img src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_4.jpg" />
    </div>

    <div class="notifications__item__content">
      <span class="notifications__item__title">Sarah Sharp</span>
      <span class="notifications__item__message">Just commented on your last post</span>
    </div>

    <div>
      <div class="notifications__item__option archive js-option">
        <i class="fas fa-folder"></i>
      </div>
      <div class="notifications__item__option delete js-option">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  </div>

  <div class="notifications__item">
    <div class="notifications__item__avatar">
      <img src="https://github.com/Flat-Pixels/Notifications-card-animation/raw/master/img/avatar_5.jpg" />
    </div>

    <div class="notifications__item__content">
      <span class="notifications__item__title">John Lee</span>
      <span class="notifications__item__message">Just started following you</span>
    </div>

    <div>
      <div class="notifications__item__option archive js-option">
        <i class="fas fa-folder"></i>
      </div>
      <div class="notifications__item__option delete js-option">
        <i class="fas fa-trash"></i>
      </div>
    </div>
  </div>
</div>
</div>  
        </div>
    )
}
