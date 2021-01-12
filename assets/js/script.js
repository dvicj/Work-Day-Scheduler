//create columns in bootstrap that are added with each time on the left and save button on the right
//variables 
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
myDay.forEach(function(thisHour) {
  //creates time blocks 
  var hourRow = $("<form>").attr({"class":"row"}); //create for with a class of "row"
  $(".container").append(hourRow); //add row to container 
  //created time field
  var hourField = $("<div>")
  .text(`${thisHour.hour}${thisHour.minute}`) //create text field with hour and am/pm
  .attr({"class": "col-2 hour"}); // add column classes 
  //creates schedule data 
  var hourPlan = $("<div>")
  .attr({"class":"col-9 description"}); //create div add column classes 
  var planData = $("<textarea id='userText'>").attr({"class":"user-input"}); //create text area 
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
  var saveButton = $("<i class='far fa-save'></i>") //create save button icon 
  var savePlan = $("<button>").attr({"class": "col-1 saveBtn"}); //creat save button 
  savePlan.append(saveButton); //add button to icon 
  hourRow.append(hourField, hourPlan, savePlan); //add time and save button to row 
});

//saves data to be used in localStorage 
$(".saveBtn").on("click", function(event) {
  event.preventDefault(); 
  saveTask(); 
  retrieveTask(); 
})
var text = JSON.parse(localStorage.getItem('userInput')) || [];
var valueChanger = 1; 

// function saveTask() {
//   text.push($("#userText").val());
//   localStorage.setItem("userInput", JSON.stringify(text));
//   //localStorage.getItem("userInput", JSON.stringify(text)); 
// }

function saveTask () {
  localStorage.userinput = JSON.stringify(text);
}
function retrieveTask() {
  var x = localStorage.getItem("userinput");
  $("#userText").innerHTML= x; 
}

