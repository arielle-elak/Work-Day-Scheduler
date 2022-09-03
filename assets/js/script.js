/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Work Day Scheduler JS
 * Last Edited by Arielle Sept 3 2022
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

var container = $(".container");



var initialEventsArr = [
  {
    slot: "9am",
    descriptionText: ""
  }, {
    slot: "10am",
    descriptionText: ""
  }, {
    slot: "11am",
    descriptionText: ""
  }, {
    slot: "12pm",
    descriptionText: ""
  }, {
    slot: "1pm",
    descriptionText: ""
  }, {
    slot: "2pm",
    descriptionText: ""
  }, {
    slot: "3pm",
    descriptionText: ""
  }, {
    slot: "4pm",
    descriptionText: ""
  }, {
    slot: "5pm",
    descriptionText: ""
  }
];


/*
 When the page is fully ready, grab the latest info from local storage
 If nothing exists, create an empty array for eventsArr
 */

$(function () {

  // On page load - display current day at the top of the calendar
  var currentDay = moment().format("dddd, MMMM Do, YYYY");
  $("#currentDay").text(currentDay);

  // Also, see if there is an eventsObj in local storage. If not, create empty array eventsArr
  // Then fill the empty array with the default values from initialEventsArr
  var eventsArr = JSON.parse(localStorage.getItem("eventsObj")) || [];

  if (eventsArr = []) {
    console.log("No eventsObj detected: Emtpy eventsArr created.");
    eventsArr = initialEventsArr;

  } else {
    console.log("Retreived eventsObj from localStorage");
  };

  console.log(eventsArr);

  // Create a new section with the class "time-block" for each entry in eventsArr
  for (var key in eventsArr) {
    if (eventsArr.hasOwnProperty(key)) {
      var sectionEl = $('<section>')
        .addClass("time-block col-12")
        .appendTo(container);
    }; // END if
  }; // END for

  // Create sub-elements within each section

  var rowEl = $('<div>')
    .appendTo(".time-block")
    .addClass("row");

  var hourEl = $('<div>')
    .appendTo(".row")
    .addClass("hour col-2 col-md-2 col-lg-2")
    .text();

  var descriptionEl = $('<div>')
    .appendTo(".row")
    .addClass("description col-8 col-md-9 col-lg-9")
    .text();

  var btnEl = $('<button><i class="fa fa-save"></i></button>')
    .appendTo(".row")
    .addClass("saveBtn col-2 col-md-1 col-lg-1");

  // Append id to each set of elements in a section

  var $div = $(".time-block");
  $div.attr('id', function (id) {
    return id;
  });

  var $div = $(".hour");
  $div.attr('id', function (id) {
      return id;
  });

  var $div = $(".description");
  $div.attr('id', function (id) {
      return id;
  });

  var $div = $(".saveBtn");
  $div.attr('id', function (id) {
      return id;
  });


  /** TODO: Use the index of the object entry to populate the text of each hour and description div
   *
   * 1) Obtain the index of each item in eventsArr
   * 2) Obtain the id of each:
   *    a) hour child of .row
   *    b) description child of .row
   * 3) Compare the index of each eventsArr and id of each
   *    a) hour child
   *    b) description child
   * 4) If index = id
   *    a) Use value of slot: key for text content of hour child
   *    b) Use value of descriptionText: key for text content of description child
   */




}); // END ON PAGE LOAD FUNCTION


// Write the current contents of eventsObj to local storage
// localStorage.setItem('eventsObj', JSON.stringify(eventsObj));


/**
 * !TODO: Timeblock timeframes color coding
 * - Past (< Today) grey
 * - Present (= Today) orange
 * - Future (> Today) green
 */



// Set up variables for each event section


 // !TODO: Generate text based upon the current eventsObj contents


// !TODO: On click event for each timeblock - space converts to text input

/**
 *!TODO: On click event for save button - the text input is saved to local storage
 * Empty local storage input:
 *
 * eventsObj {};
 *
 * Empty array"
 *
 * eventsArr [];
 *
 * When each event is saved, for the respective timeblock, append to the events object
 *
 * eventsObj {
 *  "9am": "",
 *  "10am": "",
 *  "11am": "",
 *  "12pm": "",
 *  "1pm": "",
 *  "2pm": "",
 *  "3pm": "",
 *  "4pm": "",
 *  "5pm": "",
 * }
 *
 * eventsArr [
 *  {"9am": ""},
 *  {"10am": ""},
 *  {"11am": ""},
 *  {"12pm": ""},
 *  {"1pm": ""},
 *  {"2pm": ""},
 *  {"3pm": ""},
 *  {"4pm": ""},
 *  {"5pm": ""},
 * ]
 *
 * Mock time block structure:
 *
 *
 *
 */

 // TODO: Create event listeners for save buttons

 // TODO: Create event listener for description click
