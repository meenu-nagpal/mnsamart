
export function shopingtocart (state=[],action){
    console.log(action)
            switch(action.type)
            {
                case "Shoping_Cart":
                    var temp = [...state];                
                    temp.push(action.payload);
                    return temp;
             
                default:               
                   return state;
            }
    }