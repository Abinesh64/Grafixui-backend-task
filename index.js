const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const bannerRoute = require("./routes/banner")
const couponRoute = require("./routes/coupon")
const faqRoute = require("./routes/faq");
const movieRoute = require("./routes/movie");
const eventRoute = require("./routes/event");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("db connection success"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/banner",bannerRoute);
app.use("/api/coupon",couponRoute);
app.use("/api/faq",faqRoute);
app.use("/api/movie",movieRoute);
app.use("/api/event",eventRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend running");
})