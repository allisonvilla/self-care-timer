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
]
// Select a random suggestion that is printed at the end of the timer

timerApp.init = function() {
    console.log("Sup girl");
    timerApp.seconds = 0; 
    timerApp.countdown(1); 
}

// Create a countdown timer

timerApp.countdown = function(minutes) {
    timerApp.seconds += minutes * 60; 

    interval = setInterval(function() {
        timerApp.seconds--; 
        console.log(timerApp.seconds);

        if (timerApp.seconds === 0) {
            clearInterval(interval); 
            console.log("Timer is done!"); 
        }
    }, 1000); 
}

// Use form to store timer duration from user then run countdown() on submit

// Make things happen when timer ends
    // Window comes into focus
    // Background colour changes
    // Self-care suggestion appears on screen

timerApp.init(); 