


// var initialstate=[]

// console.log(initialstate)



// return Object.assign({}, state, {
//     contacts: [...state.contacts, action.payload]


// state = update(state, { value: state.value + 1 })

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