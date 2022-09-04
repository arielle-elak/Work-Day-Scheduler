/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Work Day Scheduler JS
 * Last Edited by Arielle Sept 3 2022
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Basic empty schedule
initialEvents = [
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
var events;



/*
 When the page is fully ready, grab the latest info from local storage
 If nothing exists, create an empty array for eventsArr
 */

$(function () {

  // On page load - display current day at the top of the calendar
  var currentDay = moment().format("dddd, MMMM Do, YYYY");
  $("#currentDay").text(currentDay);

  // Checks to see if events have been saved to local storage
  // If it exists, parse it and assign it to events
  // If it doesn't, paste the default data in from initialEvents
  if (localStorage.getItem('events') !== null) {
    console.log(`Current events storage exists`);
    events = JSON.parse(localStorage.getItem('events'));

  } else {
    console.log(`Events storage not found. Creating object from initial`);
    events = initialEvents;
    localStorage.setItem("events", JSON.stringify(events));

  }; // END if

  console.log(events);

  // Cycle through all current items in events and generate sections and divs with appropriate classes, ids and text content
  jQuery.each(events, function (i, obj) {

    var sectionEl = $('<section>')
      .addClass("time-block col-12")
      .appendTo(containerEl)
      .attr('id', i);

    var rowEl = $('<div>')
      .addClass("row")
      .appendTo(sectionEl)
      .attr('id', i);

    var hourEl = $('<div>')
      .addClass("hour col-2 col-md-2 col-lg-2")
      .appendTo(rowEl)
      .attr('id', i)
      .text(obj.slot);

    var descriptionEl = $('<textarea>')
      .addClass("description col-8 col-md-9 col-lg-9")
      .appendTo(rowEl)
      .attr('id', i)
      .text(obj.text);

    var btnEl = $('<button><i class="fa fa-save"></i></button>')
      .addClass("saveBtn col-2 col-md-1 col-lg-1")
      .appendTo(rowEl)
      .attr('id', i)
  });

  // Testing out with creating a separate listener for each button
  // !TODO: Create a concise loop for assigning this

  /**
   * First, will parse the existing events local storage object
   * Then on a click from any save button
   * Set the new text to the value found in the adjacent description input area
   * Search data for the respective slot key, that corresponds to the text value that will be changed
   * Set the value of that text key to the new text from the input area
   * Store the updated events object to local storage
   */

  events = JSON.parse(localStorage.getItem('events'));

  $("#0.saveBtn").click(function () {
    var btnID = $("#0").attr("id");
    console.log(btnID);

    var newText = $('textarea#0.description').val();
    console.log(newText);

    const id = '9am';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#1.saveBtn").click(function () {
    var btnID = $("#1").attr("id");
    console.log(btnID);

    var newText = $('textarea#1.description').val();
    console.log(newText);

    const id = '10am';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#2.saveBtn").click(function () {
    var btnID = $("#3").attr("id");
    console.log(btnID);

    var newText = $('textarea#3.description').val();
    console.log(newText);

    const id = '11am';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#3.saveBtn").click(function () {
    var btnID = $("#3").attr("id");
    console.log(btnID);

    var newText = $('textarea#3.description').val();
    console.log(newText);

    const id = '12pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#4.saveBtn").click(function () {
    var btnID = $("#4").attr("id");
    console.log(btnID);

    var newText = $('textarea#4.description').val();
    console.log(newText);

    const id = '1pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#5.saveBtn").click(function () {
    var btnID = $("#5").attr("id");
    console.log(btnID);

    var newText = $('textarea#5.description').val();
    console.log(newText);

    const id = '2pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#6.saveBtn").click(function () {
    var btnID = $("#6").attr("id");
    console.log(btnID);

    var newText = $('textarea#6.description').val();
    console.log(newText);

    const id = '3pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#7.saveBtn").click(function () {
    var btnID = $("#7").attr("id");
    console.log(btnID);

    var newText = $('textarea#7.description').val();
    console.log(newText);

    const id = '4pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#8.saveBtn").click(function () {
    var btnID = $("#8").attr("id");
    console.log(btnID);

    var newText = $('textarea#8.description').val();
    console.log(newText);

    const id = '5pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  // Highlight the description area in the appropriate color based on the time of day


}); // END ON PAGE LOAD FUNCTION







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
