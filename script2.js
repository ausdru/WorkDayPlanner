// Displaying current time & date in header section.
// --------------------------------------------------------------------------
var currentTimeDisplay = $("#currentDay");
currentTimeDisplay.text(moment().format('LLLL'));

// Creating variables for text-area to be utilized & retrieve value.
// --------------------------------------------------------------------------
var hrNineText = $("#hour-9");
var hrTenText = $("#hour-10");
var hrElevenText = $("#hour-11");
var hrTwelveText = $("#hour-12");
var hrThirteenText = $("#hour-13");
var hrFourteenText = $("#hour-14");
var hrFifteenText = $("#hour-15");
var hrSixteenText = $("#hour-16");
var hrSeventeenText = $("#hour-17");
var confirmationMsg = $("#confirmation-msg");
var timeBlock = $(".time-block")

// Save button to initialize a click event to store text-area value to
// local storage.
// --------------------------------------------------------------------------
var saveBtn = $(".saveBtn");

// On the click, save the value of all items to local storage.
// --------------------------------------------------------------------------
saveBtn.on("click", function(e) {
    e.preventDefault();
    confirmationMsg.html("Successfully added to planner with <code> localStorage </code>!");
    confirmationMsg.attr("style", "text-align: center; font-size: 15px");
    var hrNineVal = hrNineText.val();
    var hrTenVal = hrTenText.val();
    var hrElevenVal = hrElevenText.val();
    var hrTwelveVal =  hrTwelveText.val();
    var hrThirteenVal = hrThirteenText.val(); 
    var hrFourteenVal = hrFourteenText.val(); 
    var hrFifteenVal = hrFifteenText.val();
    var hrSixteenVal = hrSixteenText.val();
    var hrSeventeenVal = hrSeventeenText.val();
    localStorage.setItem("hour09", hrNineVal);
    localStorage.setItem("hour10", hrTenVal);
    localStorage.setItem("hour11", hrElevenVal);
    localStorage.setItem("hour12", hrTwelveVal);
    localStorage.setItem("hour13", hrThirteenVal);
    localStorage.setItem("hour14", hrFourteenVal);
    localStorage.setItem("hour15", hrFifteenVal);
    localStorage.setItem("hour16", hrSixteenVal);
    localStorage.setItem("hour17", hrSeventeenVal);
});

// When page loads, place all items in local storage to corresponding elements
// on the page.
// --------------------------------------------------------------------------
function init() {
    hrNineText.text(localStorage.getItem("hour09")); // Use .val() to set textarea values
    hrTenText.text(localStorage.getItem("hour10"));
    hrElevenText.text(localStorage.getItem("hour11"));
    hrTwelveText.text(localStorage.getItem("hour12"));
    hrThirteenText.text(localStorage.getItem("hour13"));
    hrFourteenText.text(localStorage.getItem("hour14"));
    hrFifteenText.text(localStorage.getItem("hour15"));
    hrSixteenText.text(localStorage.getItem("hour16"));
    hrSeventeenText.text(localStorage.getItem("hour17"));
};

init();


// Finding value for the current hour.
// --------------------------------------------------------------------------
var currentHr = moment().hours();

// Comparing current hour to planner's hour to give correct color.
// --------------------------------------------------------------------------
for (var i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].dataset.time == currentHr) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("present");
    };
    if (timeBlock[i].dataset.time > currentHr) {
        timeBlock[i].classList.remove("past");
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.add("future");
    };
    if (timeBlock[i].dataset.time < currentHr) {
        timeBlock[i].classList.remove("present");
        timeBlock[i].classList.remove("future");
        timeBlock[i].classList.add("past");
    };
};
