


export function postapi (state=[],action){
console.log(action)
        switch(action.type)
        {
            case "POST_API":
                var temp = [];                
                temp.push(action.payload);
                return temp;
         
            default:               
               return state;
        }
}