import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors';
import helmet from 'helmet';
// import router
import articlesRouter from './routers/articles'
import authRouter from './routers/auth'
import ogpRouter from './routers/ogp'

export const prisma = new PrismaClient()
const app = express();
const port = process.env.PORT || 8000
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/articles', articlesRouter)
app.use('/auth', authRouter)
app.use('/ogp', ogpRouter)

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})