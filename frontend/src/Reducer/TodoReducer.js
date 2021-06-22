
export function todos (state=[{id:1,task:"first"}],action){
    console.log(action)
        switch(action.type)
        {
            case "ADD_TODO":
                var temp = [...state];                
                temp.push(action.payload);
                return temp;
            case "DELETE_TODO":
               var temp = state.filter((todo)=>{
                console.log("id to be deleted"+action.payload);   
                return todo.id!==action.payload});             
               return [...temp];
            default:               
               return state;
        }
}