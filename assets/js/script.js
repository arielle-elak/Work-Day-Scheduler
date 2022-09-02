/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Work Day Scheduler JS
 * Last Edited by Arielle Sept 2 2022
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

// !TODO: On page load - display current day at the top of the calendar
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);





// !TODO: Display timeblocks for standard business hours 9am - 5pm by the hour


/**
 * !TODO: Timeblock timeframes color coding
 * - Past (< Today) grey
 * - Present (= Today) orange
 * - Future (> Today) green
 */

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
 * <section class="time-block">
        <div class="row" id="9am">
          <div class="hour col-2 col-md-2 col-lg-2">
            9AM
          </div>
          <div class="description col-8 col-md-9 col-lg-9 past">
            Morning Meeting
          </div>
          <button class="saveBtn col-2 col-md-1 col-lg-1">
            <i class="fa fa-save"></i>
          </button>
          </div>
        </div>
      </section>
 *
 */

 // TODO: Create event listeners for save buttons

 // TODO: Create event listener for description click
