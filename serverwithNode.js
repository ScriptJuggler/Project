const http = require("http");//importing http where request will be sent because server should listen on the website
const port = 8081 //port number should always be available all time and server will be listening on that port number 8081 is microcontrolller port number
// creating server
http.createServer((req,res)=>{
    res.writeHead(200, {"Context-Type": "text/html"}) // context should be of html type
    res.write("<h1>hello this is my first server heloo tamal saga</h1>")
    res.end(); //resource release
}).listen(port , ()=>{           // to show server is up and running on the screen function is used
    console.log(`Node JS is up and running on port ${port}`)
})
//for making server active all the time

// writeHead is meta Data

//http://localhost:8081/