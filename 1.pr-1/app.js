import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB").then(() => {
    console.log("MongoDB Connected");
}).catch(() => {
    console.log("DataBase Error");
});

// Schema

const movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    director: String
});

// ADD SCHEMA IN DB
const movie = mongoose.model("movie", movieSchema);

app.get("/", (req, res) => {
    res.json({
        msg: "Home Page"
    });
})
app.listen(3000);
// http://localhost:3000/


//1. ADD MOVIES

app.post("/addmovie", async (req, res) => {
 const moviedata = await movie.create(req.body);

 res.json({
    msg: "Movie Added Succesfully !",
    data : moviedata
});
});



//2.GET ALL MOVIES

app.get("/getmovies",async(req,res)=>{
    const moviedata = await movie.find();

    res.json({
    msg: "All Movies",
    data : moviedata
});
});


//3. GET SPECIFIC MOVIE

app.get("/getmovie",async(req,res)=>{
    const moviedata = await movie.findOne({title : "jan nayagan"});

    res.json({
    msg: "Movie",
    data : moviedata
});
});

//4. UPDATE SPECIFIC MOVIE

app.put("/updatemovie", async(req, res)=>{
    const updatemoive = await movie.findByIdAndUpdate(req.body.id, req.body.newData);
    if(!updatemoive){
        res.json({
            msg:"Movie Not Found !"
        })
    }
    res.json({
        msg: "Movie Updated Successfully ",
        data : updatemoive
    })
});

//5. DELETE MOVIE

app.delete("/deletemovie", async(req, res)=>{
    const deletemovie = await movie.findByIdAndDelete(req.body.id);
    if(!deletemovie){
        res.json({
            msg:"Movie Not Found !"
        })
    }
    res.json({
        msg: "Movie Deleted Successfully ",
        data : deletemovie
    })
});