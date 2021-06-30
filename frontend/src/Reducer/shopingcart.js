
export function shopingtocart (state=[],action){
    console.log(action.payload)
    // alert("1st call from shopingcart") 
    console.log(state)    
            switch(action.type)
            
            {
                case "Add_To_Cart":
                    var temp =[...state];                
                    temp.push(action.payload);

                    return temp;


                    case "DELETE_TODO":
                        var temp = state.filter((todo)=>{
                            console.log(todo._id)
                         console.log("id to be deleted"+action.payload);  

                         return todo._id!==action.payload});             
                        return [...temp];

                        
                default:               
                   return state;
            }

    }
    
    