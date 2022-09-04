/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Work Day Scheduler JS
 * Last Edited by Arielle Sept 3 2022
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// Basic empty schedule
initialEvents = [
  {
    slot: "9AM", text: "Nothing planned"
  }, {
    slot: "10AM", text: "Nothing planned"
  }, {
    slot: "11AM", text: "Nothing planned"
  }, {
    slot: "12PM", text: "Nothing planned"
  }, {
    slot: "1PM", text: "Nothing planned"
  }, {
    slot: "2PM", text: "Nothing planned"
  }, {
    slot: "3PM", text: "Nothing planned"
  }, {
    slot: "4PM", text: "Nothing planned"
  }, {
    slot: "5PM", text: "Nothing planned"
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

  // Cycle through all current items in events and generate sections and
  // divs with appropriate classes, ids and text content based on the current events object

  jQuery.each(events, function (i, obj) {

    var sectionEl = $('<section>')
      .addClass("time-block col-12")
      .appendTo(containerEl)
      .attr('id', i+=9);

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

  // Highlight the description area in the appropriate color based on the time of day
  // Format the current time to match what shows in the hour column
  // First calculate the current time in military time (# of hours)
  var currentTime = moment().format('HH');
  var timeDescription = $(".description")
  console.log(currentTime);



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

  $("#9.saveBtn").click(function () {
    var btnID = $("#9").attr("id");
    console.log(btnID);

    var newText = $('textarea#9.description').val();
    console.log(newText);

    const id = '9am';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#10.saveBtn").click(function () {
    var btnID = $("#10").attr("id");
    console.log(btnID);

    var newText = $('textarea#10.description').val();
    console.log(newText);

    const id = '10am';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#11.saveBtn").click(function () {
    var btnID = $("#11").attr("id");
    console.log(btnID);

    var newText = $('textarea#11.description').val();
    console.log(newText);

    const id = '11am';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#12.saveBtn").click(function () {
    var btnID = $("#12").attr("id");
    console.log(btnID);

    var newText = $('textarea#12.description').val();
    console.log(newText);

    const id = '12pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#13.saveBtn").click(function () {
    var btnID = $("#13").attr("id");
    console.log(btnID);

    var newText = $('textarea#13.description').val();
    console.log(newText);

    const id = '1pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#14.saveBtn").click(function () {
    var btnID = $("#14").attr("id");
    console.log(btnID);

    var newText = $('textarea#14.description').val();
    console.log(newText);

    const id = '2pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#15.saveBtn").click(function () {
    var btnID = $("#15").attr("id");
    console.log(btnID);

    var newText = $('textarea#15.description').val();
    console.log(newText);

    const id = '3pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#16.saveBtn").click(function () {
    var btnID = $("#16").attr("id");
    console.log(btnID);

    var newText = $('textarea#16.description').val();
    console.log(newText);

    const id = '4pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));
  });

  $("#17.saveBtn").click(function () {
    var btnID = $("#17").attr("id");
    console.log(btnID);

    var newText = $('textarea#17.description').val();
    console.log(newText);

    const id = '5pm';
    events.find(v => v.slot === id).text = newText;
    console.log(events);

    localStorage.setItem('events', JSON.stringify(events));



  });

  // Highlight the description area in the appropriate color based on the time of day
  var time = moment().format("hh:mm:ss");


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
