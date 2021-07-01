
export function shopingtocart (state=[],action){
    console.log(action)
    // console.log(state)    
    // alert("1st call from shopingcart") 

            switch(action.type)
            {
                case "Add_To_Cart":
                    var temp =[...state];                
                    temp.push(action.payload);

                    return temp;
             
                default:               
                   return state;
            }
    }
    
    