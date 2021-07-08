export function createnewuser (state=[],action){
    console.log(action.payload)
    console.log(state) 
    console.log(temp)   
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
