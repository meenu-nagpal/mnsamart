export function loggedInUser (state=null,action){
    // console.log(action.payload)
    // console.log(state) 
    // console.log(temp)   

            switch(action.type)
            {
                case "LoggedIn_USER":
                      return action.payload;             
                default:               
                   return state;
            }
    }
