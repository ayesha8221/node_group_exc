
// // Question 1 examples for setTimeout(), and setInterval()

// // setTimeout()

// console.log("Start of the program");

// // Using setTimeout to display a message after 2 seconds (2000 milliseconds)
// setTimeout(() => {
//   console.log("Message displayed after 2 seconds");
// }, 2000);



// // setInterval()

// var time = 0;

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5){
//         clearInterval(timer);
//     }

// }, 2000);



// // Question 2 Promises

// const fs = require('fs').promises;

// const content = 'This is the content to be written to the file.';

// fs.writeFile('example.txt', content)
//   .then(() => {
//     console.log('File has been written successfully!');
//   })
//   .catch((err) => {
//     console.error('Error writing the file:', err);
//   });


  // Question 4
  
  const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
        console.log(req.url, res.method);
        //set header content
        res.setHeader('Content-type', 'text/html');
        //set html path for other pages/ basic routing
        let path = './html/';//folder with the html pages
        // use switch cases to navigate through each page once the url matc
        switch(req.url) { //want to match the url to the cases and figure out what url the user used
            case '/':
            path += 'home.html';//if case1 is matched, this path is added to path declared to the folder(above)
            break;
            case '/about':
                path += 'about.html';//if case2 is matched, this path is added to path declared to the folder(above)
                break;
            default:
                path += '404.html';//if it matches neither of the cases then default page is displayed, added to path
                break;
        }
        //reading html file
        fs.readFile(path, (err, data) => {
            if (err){
                console.log(err);
                //http status code in case there is an failure with the request
                // res.writeHead(500, {'Content-type': 'text/html'});
                res.end('Error reading the file.');
            } else{
               //res.write(data);
                res.end(data);
            }
    });
});
    //turning on the server
    server.listen(4000, 'localhost', () => {
        console.log('listening from port 4000')
    })
















