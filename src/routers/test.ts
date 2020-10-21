import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
  res.send('hello world')
  res.end()
})

export default router