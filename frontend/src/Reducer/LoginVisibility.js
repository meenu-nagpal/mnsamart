export function LoginVisibility (state = false, action)
{
    switch(action.type)
    {
        case "HID_COMP":                
        return false;
        case "SHOW_COMP":                
        return true;
        default:               
           return state;
    }
}