import express, { Request, Response } from 'express';
import cors from 'cors';
import errorMiddleware from './middleware/errorHandler';
import formRoutes from './routes/formRoutes';

const app = express();

// CORS configuration
app.use(
    cors({
        origin: [
            'https://rishiaga2k3.com',
            'https://rishi2k3.com',
            'https://www.rishi2k3.com',
            'http://localhost:3010',
        ], // Allow only your frontend domain
        credentials: true, // Allow credentials if needed
    })
);

// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Routes
app.use('/api/form', formRoutes);

// Error handling middleware
app.use(errorMiddleware);

export default app;
