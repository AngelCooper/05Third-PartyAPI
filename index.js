//varible to create the current date 
var dateP = document.querySelector("#currentDay"); {
    
    // to set the day to be current
    var today = new Date();

    //establishing what will show first month, day, then year
    var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();

    // creating a p tag element for the date
    var newDate = document.createElement("p");

    //appending it to the page
    dateP.append(date)
}







