import Express from "express";

const app = Express();

app.get('/',(req,res)=>{

    res.json({
    "name":"jash",
    });
});

app.listen('3000',()=>{
    console.log("port 3000");
})