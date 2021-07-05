export function hidecomp (state = [], action)
{
console.log(action.payload)

    switch(action.type)
    {
        case "HID_COMP":                
        var temp = [];                
        temp.push(action.payload);
        return temp;
         


        default:               
           return state;
    }
}