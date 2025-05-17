let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString());    // String representation of the date
console.log(myDate.toDateString());     // Date part of the date
console.log(myDate.toTimeString());     // Time part of the date
console.log(myDate.toLocaleString());   // Locale-specific string representation
console.log(typeof myDate);     // Type of the date object
console.log(myDate.getFullYear()); // Get the year
console.log(myDate.getMonth() + 1);  // Get the month (0-11, so add 1)
console.log(myDate.getDate()); // Get the date of the month

// we can also create a date object using a specific date
let myCreatedDate = new Date(2023,0,23,5,3); // January 23, 2023, 05:03:00
console.log(myCreatedDate); // Specific date and time
console.log(myCreatedDate.toString()); // String representation of the date

// TimeStamp
let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimeStamp); // Current Timestamp
console.log(myCreatedDate.getTime()); // Timestamp of the created date
