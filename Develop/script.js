//create columns in bootstrap that are added with each time on the left and save button on the right
//variables 
var scheduleBox = document.getElementById(".schedule-box");
var scheduleTime = document.getElementById(".schedule-time");
var timeBlock = document.getElementById(".time-block");
var scheduleTask = document.getElementById(".schedule.task");
var scheduleSave = document.getElementById(".saveBtn .save");
var currentDay = document.getElementById("currentDay");
var currentDate = moment(); 

//create columns in bootstrap that are added with each time on the left and save button on the right

//show current date 
currentDay.innerHTML = moment();

//when save button is clicked 
scheduleSave.onclick(
    localStorage.setItem(".task")
)