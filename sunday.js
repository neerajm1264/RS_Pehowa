let countdown; // Declare countdown as a global variable

function startTimer() {
    let now = new Date();
    let nextSunday = new Date(now);
    let daysUntilSunday = (7 - now.getDay()) % 7;

    // Set the time for next Sunday at 9:30 AM
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(9);
    nextSunday.setMinutes(30);
    nextSunday.setSeconds(0);
    nextSunday.setMilliseconds(0);
    let timeInSeconds = Math.floor((nextSunday - now) / 1000); // Calculate time in seconds

    // Update the timer every second
    countdown = setInterval(function() {
        // Display the current time
        displayTime(timeInSeconds);

        // Decrease the time by 1 second
        timeInSeconds--;

        // When the time reaches 0
        if (timeInSeconds < 0) {
            // Clear the interval
            clearInterval(countdown);

            // Display "Time's up!"
            displayTimeUp();

        }
    }, 1000); // Update every second
}
  
  // Function to display the time
  function displayTime(seconds) {
    let days = Math.floor(seconds / (24 * 60 * 60));
    let hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = Math.floor(seconds % 60);
  
    // Display the time in your preferred way (e.g., console, UI)
    document.getElementById('sundayTimer').innerText = `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
  }
  
  // Function to display "Time's up!" message
  function displayTimeUp() {
    // Display the "Time's up!" message in your preferred way (e.g., console, UI)
    document.getElementById('sundayTimer').innerText ="Satsang Start";
  }
  
  // Function to remove "Time's up!" message
  function removeTimeUp() {
    // Remove the "Time's up!" message in your preferred way (e.g., console, UI)
    document.getElementById('sundayTimer').innerText = ""
  }

// Start the timer
startTimer();
  

// Function to start the timer
// function startTimer() {
//     // let date = new Date();
//     // console.log(date.toLocaleString())
//     // let newdate = new Date("1-5-2024 2:15");
//     // console.log(newdate.toLocaleString())
//     // let distance = newdate - date;
//     // console.log(Math.floor(distance/1000))
//     let timeInSeconds = 10;
  
//     // Update the timer every second
//     let countdown = setInterval(function() {
//       // Display the current time
//       displayTime(timeInSeconds);
  
//       // Decrease the time by 1 second
//       timeInSeconds--;
  
//       // When the time reaches 0
//       if (timeInSeconds < 0) {
//         // Clear the interval
//         clearInterval(countdown);
  
//         // Display "Time's up!"
//         displayTimeUp();
  
//         // After 10 seconds, start the timer again
//         setTimeout(function() {
//           // Remove the "Time's up!" message
//           removeTimeUp();
  
//           // Restart the timer
//           startTimer();
//         }, 2000); // 10 seconds break
//       }
//     }, 1000); // Update every second
//   }
  
//   // Function to display the time
//   function displayTime(seconds) {
//     // Convert seconds to hours, minutes, and remaining seconds
//     let days = Math.floor(seconds / (3600 * 24));
//   let hours = Math.floor((seconds % (3600 * 24)) / 3600);
//   let minutes = Math.floor((seconds % 3600) / 60);
//   let remainingSeconds = seconds % 60;
  
//     // Display the time in your preferred way (e.g., console, UI)
//     document.getElementById('sundayTimer').innerText = `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
//     console.log(`${days}d ${hours}h ${minutes}m ${remainingSeconds}s`);
//   }
  
//   // Function to display "Time's up!" message
//   function displayTimeUp() {
//     // Display the "Time's up!" message in your preferred way (e.g., console, UI)
//     document.getElementById('sundayTimer').innerText = 'Times up!'
//     console.log("Satsang Start");
//   }
  
//   // Function to remove "Time's up!" message
//   function removeTimeUp() {
//     // Remove the "Time's up!" message in your preferred way (e.g., console, UI)
//     document.getElementById('sundayTimer').innerText = ''
//     console.clear(); // For demonstration, clears the console
//   }
  
//   // Start the timer
//   startTimer();
  