const timerApp = {}

// Create an array that contains self care suggestions
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
    'sing some karaoke!'
]
// Select a random suggestion that is printed at the end of the timer

timerApp.init = function() {
    console.log("Sup girl");
    
}

// Create a countdown timer

// These values will be visible on UI
timerApp.minutes = 2; // User will be able to determine duration
timerApp.seconds = 60;

timerApp.countdown = function() {
    interval = setInterval(function() {
        timerApp.seconds--; 
        console.log(timerApp.seconds);

        if (timerApp.seconds === 0) {
            timerApp.minutes--; 
            timerApp.seconds = 60; 
            console.log(timerApp.minutes);
    
            if (timerApp.minutes < 1) {
                clearInterval(interval);
                console.log('Timer is done!');
            }
        }
    }, 10); // Temporarily changed from 1000ms for testing purposes
}
timerApp.countdown(); 

// Use form to store timer duration from user then run countdown() on submit

// Make things happen when timer ends
    // Window comes into focus
    // Send a notification (if possible?)
    // Background colour changes
    // Self-care suggestion appears on screen

timerApp.init(); 