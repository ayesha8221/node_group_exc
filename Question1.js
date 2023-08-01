// The event loop is a crucial mechanism for handling asynchronous operations efficiently. It allows Node.js to perform multiple tasks simultaneously without blocking the main thread.

// Event registration: Asynchronous operations (e.g., file I/O, network requests) are initiated, and callbacks are registered to be executed when these operations complete.

// Event queue: Completed events and their associated callbacks are placed in an event queue.

// Event loop cycle: The event loop continuously checks the event queue for pending events.

// Execution of callbacks: Callbacks from the event queue are executed one by one, allowing Node.js to process multiple operations concurrently.

// Non-blocking nature: The event loop's non-blocking nature ensures that the execution of callbacks doesn't block the main thread, enabling efficient handling of concurrent operations.

// Timers and I/O operations: The event loop also manages timers and I/O operations, executing their callbacks when the operations complete.

// Question 1 examples for setTimeout(), and setInterval()

// setTimeout()

console.log("Start of the program");

// Using setTimeout to display a message after 2 seconds (2000 milliseconds)
setTimeout(() => {
  console.log("Message displayed after 2 seconds");
}, 2000);

console.log("End of the program");

// The setTimeout() function is used to schedule the execution of a callback after a specified delay. In this example, we set the delay to 2000 milliseconds (2 seconds).

// The anonymous arrow function inside setTimeout() will be executed after the specified delay. It displays "Message displayed after 2 seconds" to the console.


// setInterval()

var time = 0;

var timer = setInterval(function() {
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5){
        clearInterval(timer);
    }

}, 2000);

// The variable time is initialized to 0.

// The setInterval() function is used to create a repeating timer. It executes the given callback function every 2 seconds (2000 milliseconds).

// Inside the callback function, the time variable is incremented by 2 each time the function is called.

// The number of seconds passed is printed to the console along with the message "seconds have passed."

// The condition if (time > 5) checks if 5 or more seconds have passed. If so, the clearInterval() function is called to stop the interval from running further.

// The interval will continue running until time becomes greater than 5. At that point, the interval is cleared, and the program stops.

