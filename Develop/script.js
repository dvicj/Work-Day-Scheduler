//create columns in bootstrap that are added with each time on the left and save button on the right
//variables 
var scheduleBox = document.querySelector(".schedule-box");
var scheduleRow = scheduleBox.querySelector(".row .schedule-row")
var scheduleTime = scheduleRow.querySelector(".schedule-time");
var timeBlock = document.getElementById(".time-block");
var scheduleTask = document.getElementById(".schedule.task");
var scheduleSave = document.getElementById(".saveBtn .save");
var currentDay = document.getElementById("currentDay");
var taskText = document.querySelector("task").value;


//create columns in bootstrap that are added with each time on the left and save button on the right

//show current date 
currentDay.innerHTML = moment().format("ddd. MMMM Do, YYYY - h:mm A");


//when save button is clicked 
$(".saveBtn").on("click","button", function() {
    console.log("save button clicked");
});