import { Router } from 'express';
import { prisma } from '../';
// import config
import admin from '../config/firebaseAdmin'

const router = Router()

router.get('/', async(req, res) => {
  const articles = await prisma.article.findMany()
  res.json(articles)
})

router.post('/', async (req, res) => {
  const { url } = req.body
  const token = req.headers.authorization as string
  const idToken = token?.replace(/^Bearer (.*)/, "$1");
  const { uid } = await admin.auth().verifyIdToken(idToken)
  const currentUser = await prisma.user.findOne({where: {uid}})
  if(currentUser) {
    const article = await prisma.article.create({
      data: {
        url,
        user: {
          connect: {
            uid
          }
        }
      }
    })
    res.json(article)
  }else {
    res.sendStatus(403)
  }
})

router.delete('/:id', async(req, res) => {
  const { id } = req.params
  const token = req.headers.authorization as string
  const idToken = token?.replace(/^Bearer (.*)/, "$1");
  const { uid } = await admin.auth().verifyIdToken(idToken)
  const currentUser = await prisma.user.findOne({where: {uid}})
  if(currentUser) {
    const result = await prisma.article.delete({where: {
      id: Number(id)
    }})
    console.log(result);
    res.json(result)
  }else {
    res.sendStatus(403)
  }
})

export default router