const express = require("express"); //import express

const app = express(); //application build - initialization
app.use(express.json()) // application using json formatted data

const port = 8081;
const toDoList = ["rohan","rohit","anil","anup"]

//http://localhost:8081/
app.get("/",(req,res) => { //whille encountering todos
    res.status(200).send("Home page")
});


//http://localhost:8081/todos
app.get("/todos",(req,res) => { //whille encountering todos
    res.status(200).send(toDoList)
});

app.post("/todos",(req,res) => {
    let newdo = req.body.name  //request of adding credentials by client
    toDoList.push(newdo)    // pushing the new element
    res.status(201).send({
        message: "Task Added Successfully"
    })
})

app.delete("/todos",(req,res) => {
    const delt = req.body.name;
    toDoList.find((ele , i) => {
        if(ele === delt){
            toDoList.splice(i,1)
        }
    })
    res.status(202).send({
        message: "Task got deleted"
    })
})


//for all other http method
app.all("/todos",(req,res) => {
    res.status(501).send()
})

//if link is wrong
app.all("*",(req,res) => {
    res.status(404).send()
})


app.listen(port , () => {
    console.log(`Node-Express server is up and running on port ${port}`)
})