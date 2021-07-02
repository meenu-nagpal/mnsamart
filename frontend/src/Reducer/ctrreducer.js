export function ctr (state = 0 , action)
{
console.log(action.payload)

    switch(action.type)
    {
        case "INC_CTR":                
            var ctr = state+1;
            return ctr ;
            
            
            case "DEC_CTR":                
            var ctr = state-1;
            return ctr ;




        default:               
           return state;
    }
}