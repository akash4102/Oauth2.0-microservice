import express from 'express';
import authRoutes from './routes/auth.routes'; // this should be a Router

const app = express();

app.use(express.json());
app.use('/auth', authRoutes); 

app.get('/', (_,res:any) => res.send('OAuth service is up ✅'));

export default app;