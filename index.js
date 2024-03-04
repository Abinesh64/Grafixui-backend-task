const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const BannerRoute = require("./routes/BannerRoute");
const CouponRoute = require("./routes/CouponRoute");
const FaqRoute = require("./routes/FaqRoute");
const MovieRoute = require("./routes/MovieRoute");
const EventRoute = require("./routes/EventRoute");
const OrderRouter = require('./routes/OrderRouter');
const PromoDetailRouter = require('./routes/PromoDetailRouter');
const ReviewRouter = require('./routes/ReviewRouter');
const TicketDetailRouter = require('./routes/TicketDetailRouter');
const UserRouter = require('./routes/UserRouter');

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("db connection success"))
.catch((err)=>console.log(err));
app.use(cors());
app.use(express.json());

// Abinesh work
app.use("/api/banner",BannerRoute);
app.use("/api/coupon",CouponRoute);
app.use("/api/faq",FaqRoute);
app.use("/api/movie",MovieRoute);
app.use("/api/event",EventRoute);

//manickavasagam work
app.use('/api/Order', OrderRouter)
app.use('/api/Promodetail', PromoDetailRouter)
app.use('/api/Review', ReviewRouter)
app.use('/api/Ticketdetail', TicketDetailRouter)
app.use('/api/User', UserRouter)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend running");
})