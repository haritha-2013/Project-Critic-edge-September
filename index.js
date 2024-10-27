import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';
import castRoute from './routes/castRoute.js';
import genreRoute from './routes/genreRoute.js';
import movieRoute from './routes/movieRoute.js';
import premiumContentRoute from './routes/premiumContentRoute.js';
import ratingRoute from './routes/ratingRoute.js';
import reviewRoute from './routes/reviewRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

console.log("DB_URL:", process.env.DB_URL);
app.use(express.json()) ; //Middleware to parse JSON req.body
app.use(cookieParser());

connectDB(); // Connect to the database

// Use admin routes 
app.use('/api/admin',  adminRoute);

// Use the user routes
app.use('/api/users', userRoute);


// Use the rewiew routes
app.use('/api/reviews', reviewRoute);


// Use the rating routes
app.use('/api/ratings', ratingRoute);

// Use the premiumContent routes
app.use('/api/premium', premiumContentRoute);

// Use the movie routes
app.use('/api/movies', movieRoute);

// USe the genre routes
app.use('/api/genres', genreRoute);

// Use the cast routes
app.use('/api/cast', castRoute);




app.all("*", (req, res, next) => {
  res.status(404).json({ message: "end point does not exist" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;