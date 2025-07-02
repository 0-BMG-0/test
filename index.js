 // time.js
 // Function to display the current date and time
 function displayTime() {
    // Create a new Date object to get the current date and
    time
    let date = new Date();
    // Find the HTML element with the ID ’time’ and update its text content
    document.getElementById("time").innerText = date;
    console.log("Time␣updated␣to:␣" + date)
    }
    // Continuously update the time every second (1000 milliseconds)
    setInterval(displayTime, 1000);