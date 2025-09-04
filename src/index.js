import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import consultationRoutes from './routes/consultations.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/consultations', consultationRoutes);

const { PORT, ENV } = process.env;

if(ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

app.get("/", (req, res) => {
  res.send("API is running on Vercel!");
});
