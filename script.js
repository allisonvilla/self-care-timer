const timerApp = {}

// Array containing affirmations before care suggestion
timerApp.beforeCare = [
    'Amazing job',
    'You did it',
    'Great work',
    'Excellent work',
    'You did great',
    'Great productivity', 
    'What a great work session',
    'Incredible job', 
    'Nice work', 
]

// Array containing self care suggestions
timerApp.care = [
    'listen to your favourite song',
    'look outside to rest your eyes',
    'drink a glass of water',
    'stretch your legs', 
    'enjoy a cup of tea', 
    'go for a walk',
    'enjoy a snack',
    'look at cute animal pics', 
    'call a friend to catch up', 
    'take a bubble bath', 
    'play a video game',
    'take a nap', 
    'watch an episode of your show', 
    'pat yourself on the back', 
    'celebrate your accomplishments', 
    'enjoy a cup of coffee', 
    'have dessert',  
    'watch a funny video', 
    'enjoy a baked good', 
    'order in your favourite food',
    'thank yourself for working so hard',
    'listen to a podcast',
    'sing some karaoke',
    'eat something yummy',
    'compliment yourself in the mirror', 
    'lie down for a bit',
    'breathe some fresh air',
    'do some yoga',
    'meditate'
]

// Seconds and minutes
timerApp.seconds = 0;
timerApp.minutes = 0;
timerApp.storedSeconds = 0;
timerApp.storedMinutes = 0;

// Seconds and minutes display
timerApp.secondsEl = document.querySelector('#seconds');
timerApp.minutesEl = document.querySelector('#minutes');
// Form elements
timerApp.formEl = document.querySelector('form'); 
timerApp.timeInputEl = document.querySelector('#time-input');
timerApp.timeButtonEl = document.querySelector('#time-btn');
// Control buttons
timerApp.pauseButtonEl = document.querySelector('#pause-btn');  
timerApp.resumeButtonEl = document.querySelector('#resume-btn');
timerApp.resetButtonEl = document.querySelector('#reset-btn');
// Self-care suggestion
timerApp.beforeCareEl = document.querySelector('#care-starter');
timerApp.careEl = document.querySelector('#care-suggest');

// Use form to store timer duration from user then run countdown() on submit
timerApp.formEl.addEventListener('submit', function(event) {
    event.preventDefault(); 
    timerApp.seconds = 60; 
    // Store user's time input into minutes variable
    timerApp.minutes = timerApp.timeInputEl.value - 1; 
    // Run countdown function
    timerApp.countdown(); 
    // Hide form input 
    timerApp.formEl.style.display = 'none'; 
}); 

// Pause button stops the timer and stores the remaining minutes and seconds
timerApp.pauseButtonEl.addEventListener('click', function() {
    // Store current minutes and seconds into a new variable
    timerApp.storedSeconds = timerApp.seconds;
    timerApp.storedMinutes = timerApp.minutes; 
    timerApp.resumeButtonEl.style.display = 'inline-block';
    // Clear the interval
    clearInterval(interval);
    // Hide pause button
    timerApp.pauseButtonEl.style.display = 'none';
});

// Resume button resumes the timer after pausing
timerApp.resumeButtonEl.addEventListener('click', function() {
    // Put stored minutes & seconds back then reset
    timerApp.seconds = timerApp.storedSeconds; 
    timerApp.minutes = timerApp.storedMinutes;
    timerApp.storedSeconds = 0;
    timerApp.storedMinutes = 0; 
    // Start timer again
    timerApp.countdown(); 
    // Hide resume button and show pause button
    timerApp.resumeButtonEl.style.display = 'none';
    timerApp.pauseButtonEl.style.display = 'inline-block';
}); 

// Reset button reloads the page
timerApp.resetButtonEl.addEventListener('click', function() {
    window.location.reload(); 
}); 

// Array randomizer function
timerApp.arrayRandomizer = function (array) {
    const arrayIndex = Math.floor(Math.random() * array.length);
    return array[arrayIndex];
}

// Timer countdown function
timerApp.countdown = function() {
    // Show control buttons
    timerApp.pauseButtonEl.style.display = 'inline-block';
    timerApp.resetButtonEl.style.display = 'inline-block';

    interval = setInterval(function() {
        // This code executes every second (or 1000ms, specified below)
        timerApp.seconds--; 
        timerApp.secondsEl.textContent = `${timerApp.seconds}`; 
        timerApp.minutesEl.textContent = `${timerApp.minutes}`;

        if (timerApp.seconds === 0) {
            // Once seconds reaches 0, deduct 1 from minutes
            if (timerApp.minutes > 0) {
                timerApp.minutes--;
                // Reset seconds to 60
                timerApp.seconds = 60; 
            // Do not deduct from minutes if >= 0 
            } else {
                timerApp.minutes = timerApp.minutes; 
            }
            // Display updated minutes count
            timerApp.minutesEl.textContent = `${timerApp.minutes}`;
    
            if (timerApp.minutes === 0 && timerApp.seconds === 0) {
                // Stop counting down once time runs out
                clearInterval(interval);
                // Hide pause button
                timerApp.pauseButtonEl.style.display = 'none';
                // Randomize self-care suggestion
                const beforeCareSuggest = timerApp.arrayRandomizer(timerApp.beforeCare);
                const careSuggest = timerApp.arrayRandomizer(timerApp.care);
                // Display self-care suggestion
                timerApp.beforeCareEl.textContent = `${beforeCareSuggest}! 🙌 `;
                timerApp.careEl.textContent = `Take a break and ${careSuggest}.`;
                // Play notification sound
                document.querySelector('audio').play();
            }
        }
    }, 1000);
}