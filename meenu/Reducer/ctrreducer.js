export function ctr (state = 0 , action)
{
    switch(action.type)
    {
        case "INC_CTR":                
            var ctr = state+1;
            return ctr ;  
        default:               
           return state;
    }
}