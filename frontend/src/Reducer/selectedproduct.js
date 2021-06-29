
export function selectedproduct (state={},action){
    console.log(action)
    // alert('add cart')
            switch(action.type)
            {
                case "Select_Product":
                    var temp ={...action.payload};  
                    // var temp =[...state];                


                    // temp.push(action.payload);
                    return temp;
             
                default:               
                   return state;
            }
    }