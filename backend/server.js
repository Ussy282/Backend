import express from 'express';
import  mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import e from 'express';


dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb: //localhost/e-commerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then (() => {
    console.log("connection to mongoose is successful");
}).catch((e) => {
    console.log("connection fail");
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
res.send('Node server is Serve here');
});

app.get('/', (req, res) => {
    res.send("server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
});

process.on('unhandledRejection', (reason, promise) => {
    // do something
  });