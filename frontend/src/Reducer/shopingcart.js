
export function shopingtocart (state=[],action){
    console.log(action.payload)
    console.log(state)     

            switch(action.type)
            {
                case "Shoping_Cart":
                    var temp = [...state];                
                    temp.push(action.payload);
      console.log(state)     

                    return temp;
             
                default:               
                   return state;
            }
    }
    
    