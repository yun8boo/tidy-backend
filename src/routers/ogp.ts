import { Router } from 'express';
import fetch from 'node-fetch'
import { getPageInfo } from '../libs/getPageInfo';

const router = Router()

router.get('/', async(req, res) => {
  const { url } = req.query
  const {site_name, title, description, image} = await getPageInfo(url as string)
  res.json({site_name, title, description, image})
})

export default router