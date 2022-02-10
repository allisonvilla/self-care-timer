// Concepts I learned/practiced through this project
    // ✔ Namespacing
    // ✔ Array methods
    // ✔ setInterval() method

const timerApp = {}

// Array containing sentence starters before suggestion
timerApp.beforeCare = [
    'Why don\'t you ',
    'It\'s time to ',
    'You deserve to ',
]

// Array containing self care suggestions
timerApp.care = [
    'listen to your favourite song!',
    'look outside and rest your eyes!',
    'drink a glass of water!',
    'stretch your legs!', 
    'enjoy a cup of tea!', 
    'go for a walk!',
    'enjoy a snack!',
    'look at cute animal pics!', 
    'call a friend and catch up!', 
    'take a bubble bath!', 
    'play a video game!',
    'take a nap!', 
    'watch an episode of your show!', 
    'pat yourself on the back!', 
    'celebrate your accomplishments!', 
    'enjoy a cup of coffee!', 
    'have dessert!', 
    'do some yoga!', 
    'watch a funny video!', 
    'enjoy a baked good!', 
    'order in your favourite food!',
    'thank yourself for working so hard!',
    'listen to a podcast!',
    'sing some karaoke!',
    'eat something yummy!',
    'compliment yourself in the mirror!'
]
// Select a random suggestion that is printed when the timer reaches zero

timerApp.init = function() {
    console.log("Sup girl");
    // Store some DOM elements in variables 
    timerApp.timeInputEl = document.querySelector('#time-input'); 
    timerApp.timeButtonEl = document.querySelector('#time-btn'); 
    timerApp.pauseButtonEl = document.querySelector('#pause-btn'); 
    timerApp.resetButtonEl = document.querySelector('#reset-btn'); 
    // Initialize seconds and minutes so they are available throughout namespace
    timerApp.seconds = 0;
    timerApp.minutes = 0;
}

// Use form to store timer duration from user then run countdown() on submit
timerApp.formEl = document.querySelector('form'); 
timerApp.formEl.addEventListener('submit', function(event) {
    event.preventDefault(); 
    timerApp.seconds = 60; 
    // Store user's time input into minutes variable
    timerApp.minutes = timerApp.timeInputEl.value - 1; 
    // Run countdown function
    timerApp.countdown(); 
}); 

timerApp.countdown = function() {
    const secondsEl = document.querySelector('#seconds'); 
    const minutesEl = document.querySelector('#minutes');

    interval = setInterval(function() {
        // This code executes every second (or 1000ms, specified below)
        timerApp.seconds--; 
        secondsEl.textContent = `${timerApp.seconds}`; 
        minutesEl.textContent = `${timerApp.minutes}`;

        if (timerApp.seconds === 0) {
            // Once seconds reaches 0, deduct 1 from minutes
            timerApp.minutes--; 
            timerApp.seconds = 60; 
            minutesEl.textContent = `${timerApp.minutes}`;
    
            if (timerApp.minutes < 1) {
                // Stop counting down once time runs out
                clearInterval(interval);
            }
        }
    }, 100); // Temporarily changed from 1000ms for testing purposes
}

// Add a pause button that pauses the timer
// Add a reset button that resets the timer

// Make things happen when timer ends
    // Window comes into focus
    // Send a notification (if possible?)
    // Background colour changes
    // Self-care suggestion appears on screen

timerApp.init(); 