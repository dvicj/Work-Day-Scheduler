//create columns in bootstrap that are added with each time on the left and save button on the right
//variables 
var scheduleBox = document.querySelector(".schedule-box");
var scheduleRow = document.querySelector(".row .schedule-row")
var scheduleTime = document.querySelector(".schedule-time");
var timeBlock = document.querySelector(".time-block");
var scheduleTask = document.querySelector(".schedule.task");
//var scheduleSave = document.querySelector(".saveBtn .save");
var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");
//var taskText = document.querySelector("task").value;

var hourArray = [
    {
    hour: "9:00 AM" //index 0
    }, 
    {
    hour: "10:00 AM" //index 1
    },
    {
    hour: "11:00 AM" //index 2
    },
    {
    hour: "12:00 AM" //index 3
    },
    {
    hour: "1:00 PM" //index 4
    },
    {
    hour: "2:00 PM" //index 5
    },
    {
    hour: "3:00 PM" //index 6
    },
    {
    hour: "4:00 PM" //index 7
    },
    {
    hour: "5:00 PM" //index 8 
    }            
];

$(".time-block") {
    var time = $(this)
    .val()
    .trim(); 
    
}

//current time - update every minute 
function updateTime() {
    var currentTime = moment().format("h:mm A");
    $('#currentTime').html("Current time: " + currentTime);
};

updateTime (); 
setInterval(function() {
    updateTime(); 
},60000);

hourArray.hour = moment().format("h:mm A");

//if date is in the future, add future class 
if (hourArray[i] > currentTime) {
    var futureHour = $("<div>").addClass("future");
}
else if (hourArray[i] === currentTime) {
    var currentHour = $("<div>").addClass("present");
}
// else {
//     var hourArray[i] = $("<div>").addClass("past");
// }

//create columns in bootstrap that are added with each time on the left and save button on the right

//show current date 
currentDay.innerHTML = moment().format("ddd. MMMM Do, YYYY");


//when save button is clicked 
$(".saveBtn").on("click","button", function() {
    console.log("save button clicked");
});

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
  
    });
  };

  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  