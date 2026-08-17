const day='Wednesday';
switch(day){
    case 'Monday': //day==='Monday'
        console.log("Plan course structure");
        console.log("Go to Coding meetup");
    break;
    case 'Tuesday':
        console.log("Prepare theory videos");
    break; 
    case 'Wednesday':
    case 'Thursday':   
    console.log("Write code examples");
    break;
    case 'Friday':
        console.log("Record videos");
    break;
    case 'Saturday':
    case 'Sunday':
        console.log("Enjoy the weekend");
        break;
    default:    
        console.log("Invalid day");

}