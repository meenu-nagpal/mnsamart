
export function addtocart (state=[],action){
    console.log(action)
            switch(action.type)
            {
                case "Add_Cart":
                    var temp = [...state];                
                    temp.push(action.payload);
                    return temp;
             
                default:               
                   return state;
            }
    }