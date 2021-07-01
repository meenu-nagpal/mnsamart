export function createnewuser (state=[],action){
    console.log(action)
    console.log(state)    
    // alert("1st call from shopingcart") 

            switch(action.type)
            {
                case "Add_NEW_USER":
                    var temp =[...state];                
                    temp.push(action.payload);

                    return temp;
             
                default:               
                   return state;
            }
    }