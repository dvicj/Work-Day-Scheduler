//create columns in bootstrap that are added with each time on the left and save button on the right
//variables 
var scheduleBox = document.querySelector(".schedule-box");
var scheduleRow = document.querySelector(".row .schedule-row")
var scheduleTime = document.querySelector(".schedule-time");
var timeBlock = document.querySelector(".time-block");
var scheduleTask = document.querySelector(".schedule.task");
var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");


var myDay = [
    {
      index: "0",
      hour: "09", //index 0
      minute: ":00",
      time: "09",
      reminder: ''
    }, 
    {
      index:"1",
      hour: "10", //index 1
      minute: ":00",
      time: "10",
      reminder: ''
    },
    {
      index:"2",
      hour: "11", //index 2
      minute: ":00",
      time: "11",
      reminder: ''
    },
    {
      index:"3",
      hour: "12", //index 3
      minute: ":00",
      time: "12",
      reminder: ''
    },
    {
      index:"4",
      hour: "13", //index 4
      minute: ":00",
      time: "13",
      reminder: ''
    },
    {
      index:"5",
      hour: "14", //index 5
      minute: ":00",
      time: "14",
      reminder: ''
    },
    {
      index:"6",
      hour: "15", //index 6
      minute: ":00",
      time: "15",
      reminder: ''
    },
    {
      index:"7",
      hour: "16", //index 7
      minute: ":00",
      time: "16",
      reminder: ''
    },
    {
      index:"8",
      hour: "17", //index 8 
      minute: ":00",
      time: "17",
      reminder: ''
    }            
];

//create array to hold tasks for saving
var tasks = [];
var taskTypeInput = $(".user-input").value;
//save task as an object with time, status and push into task array 
var taskDataObj = {
  time: time, 
  type: taskTypeInput
}; 
taskDataObj.index = taskTypeInput; 
tasks.push(taskDataObj);
//save tasks to localStorage 
saveTasks(); 

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("tasks saved");
};

var loadTasks = function() {
  var savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) {
    return false; 
  }
  console.log("Saved tasks found!")
  savedTasks = JSON.parse(savedTasks); 
}


//show current date 
$('#currentDay').html("Today's date: " + moment().format("ddd. MMMM Do, YYYY"));

//current time - update every minute 
function updateTime() {
  var currentTime = moment().format("HH:mm A");
  $('#currentTime').html("Current time: " + currentTime);
};

updateTime (); 
setInterval(function() {
  updateTime(); 
},60000);

//save data to local storage 
function saveReminders() {
  localStorage.setItem("myDay",JSON.stringify(myDay));
}

//sets any data in local storage to the view 
function displayReminders() {
  myDay.forEach(function(_thisHour) {
    $(`#${_thisHour.index}`).val(_thisHour.reminder); 
  })
}

function init() {
  var storedDay = JSON.parse(localStorage.getItem("myDay"));
  if (storedDay) {
    myDay = storedDay; 
  }
  saveReminders(); 
  displayReminders(); 
}

//schedule body 
myDay.forEach(function(thisHour) {
  //creates time blocks 
  var hourRow = $("<form>").attr({"class":"row"}); //create for with a class of "row"
  $(".container").append(hourRow); //add row to container 
  //created time field
  var hourField = $("<div>")
  .text(`${thisHour.hour}${thisHour.minute}`) //create text field with hour and am/pm
  .attr({"class": "col-md-2 hour"}); // add column classes 
  //creates schedule data 
  var hourPlan = $("<div>")
  .attr({"class":"col-md-9 description p-0"}); //create div add column classes 
  var planData = $("<textarea>").attr({"class":"user-input"}); //create text area 
  hourPlan.append(planData); // add hour div to text area 
  planData.attr("index", thisHour.index); //add id to text area 
  if (thisHour.time < moment().format("HH")) { //if time is less than current time, add past class 
    planData.attr({"class":"past"})
  } else if (thisHour.time === moment().format("HH")) { //if time is equal to current time, add present class 
    planData.attr({"class": "present"})
  } else if (thisHour.time > moment().format("HH")) { //if time is more than current time, add future class 
    planData.attr({"class":"future"})
  }
  //create save button 
  var saveButton = $("<i class='far fa-save fa-lg></i>") //create save button icon 
  var savePlan = $("<button>").attr({"class": "col-md-1 saveBtn"}); //creat save button 
  savePlan.append(saveButton); //add button to icon 
  hourRow.append(hourField, hourPlan, savePlan); //add time and save button to row 
});

//loads any existing localstorage data after components created 
init(); 

//saves data to be used in localStorage 
$(".saveBtn").on("click", function(event) {
  event.preventDefault(); 
  var saveTextInput = $("user-input"); 
  localStorage.setItem("saveTextInput", JSON.stringify(saveTextInput));
  console.log(saveTextInput + "saved"); 
  //var saveIndex = $(this).siblings(".description").children(".future").attr("index");
 // myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val(); 
 // console.log(saveIndex);
  saveReminders(); 
  displayReminders(); 
})

