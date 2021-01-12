//create columns in bootstrap that are added with each time on the left and save button on the right
//variables 
var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");


var workHours = [
    {
      index: "0",
      hour: "09", //index 0
      minute: ":00",
      time: "09"
    }, 
    {
      index:"1",
      hour: "10", //index 1
      minute: ":00",
      time: "10"
    },
    {
      index:"2",
      hour: "11", //index 2
      minute: ":00",
      time: "11"
    },
    {
      index:"3",
      hour: "12", //index 3
      minute: ":00",
      time: "12"
    },
    {
      index:"4",
      hour: "13", //index 4
      minute: ":00",
      time: "13"
    },
    {
      index:"5",
      hour: "14", //index 5
      minute: ":00",
      time: "14"
    },
    {
      index:"6",
      hour: "15", //index 6
      minute: ":00",
      time: "15"
    },
    {
      index:"7",
      hour: "16", //index 7
      minute: ":00",
      time: "16"
    },
    {
      index:"8",
      hour: "17", //index 8 
      minute: ":00",
      time: "17"
    }            
];

var tasks = [];

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

//schedule body 
workHours.forEach(function(thisHour) {
  //creates time blocks 
  var hourRow = $("<form>").attr({"class":"row"}); //create for with a class of "row"
  $(".container").append(hourRow); //add row to container 
  //created time field
  var hourField = $("<div>")
  .text(`${thisHour.hour}${thisHour.minute}`) //create text field with hour and am/pm
  .attr({"class": "col-2 hour"}); // add column classes 
  //creates schedule data 
  var hourSchedule = $("<div>")
  .attr({"class":"col-9 description"}); //create div add column classes 
  var scheduleData = $("<textarea id='userText'>").attr({"class":"user-input"}); //create text area 
  hourSchedule.append(scheduleData); // add hour div to text area 
  scheduleData.attr("index", thisHour.index); //add id to text area 
  if (thisHour.time < moment().format("HH")) { //if time is less than current time, add past class 
    scheduleData.attr({"class":"past"})
  } else if (thisHour.time === moment().format("HH")) { //if time is equal to current time, add present class 
    scheduleData.attr({"class": "present"})
  } else if (thisHour.time > moment().format("HH")) { //if time is more than current time, add future class 
    scheduleData.attr({"class":"future"})
  }
  //create save button 
  var saveButton = $("<i class='far fa-save'></i>") //create save button icon 
  var savePlan = $("<button>").attr({"class": "col-1 saveBtn"}); //creat save button 
  savePlan.append(saveButton); //add button to icon 
  hourRow.append(hourField, hourSchedule, savePlan); //add time and save button to row 
});

//saves data to be used in localStorage 
$(".saveBtn").on("click", function(event) {
  event.preventDefault(); 
  saveTask(); 
  retrieveTask(); 
})
var text = JSON.parse(localStorage.getItem('userInput')) || [];
var valueChanger = 1; 

function saveTask () {
  localStorage.userinput = JSON.stringify(text);
}
function retrieveTask() {
  var x = localStorage.getItem("userinput");
  $("#userText").innerHTML= x; 
}

