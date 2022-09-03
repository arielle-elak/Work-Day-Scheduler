/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Work Day Scheduler JS
 * Last Edited by Arielle Sept 3 2022
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Basic empty schedule
events = [
  {
    slot: "9am", text: "Nothing planned"
  }, {
    slot: "10am", text: "Nothing planned"
  }, {
    slot: "11am", text: "Nothing planned"
  }, {
    slot: "12pm", text: "Nothing planned"
  }, {
    slot: "1pm", text: "Nothing planned"
  }, {
    slot: "2pm", text: "Nothing planned"
  }, {
    slot: "3pm", text: "Nothing planned"
  }, {
    slot: "4pm", text: "Nothing planned"
  }, {
    slot: "5pm", text: "Nothing planned"
  }
];

var containerEl = (".container");



/*
 When the page is fully ready, grab the latest info from local storage
 If nothing exists, create an empty array for eventsArr
 */

$(function () {

  // On page load - display current day at the top of the calendar
  var currentDay = moment().format("dddd, MMMM Do, YYYY");
  $("#currentDay").text(currentDay);

  // Variables for each element type - create and append
  $.each(events, function( key, obj ) {
    console.log(obj.slot);
    console.log(obj.text);
  });


  jQuery.each(events, function (i, obj) {
    console.log(i);

    var sectionEl = $('<section>').addClass("time-block col-12").appendTo(containerEl).attr('id', i);
    var rowEl = $('<div>').addClass("row").appendTo(sectionEl).attr('id', i);
    var hourEl = $('<div>').addClass("hour col-2 col-md-2 col-lg-2").appendTo(rowEl).attr('id', i).text(obj.slot);
    var descriptionEl = $('<div>').addClass("description col-8 col-md-9 col-lg-9").appendTo(rowEl).attr('id', i);
    var btnEl = $('<button><i class="fa fa-save"></i></button>').addClass("saveBtn col-2 col-md-1 col-lg-1").appendTo(rowEl).attr('id', i);
  });




}); // END ON PAGE LOAD FUNCTION


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
