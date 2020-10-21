import { Router } from 'express';
import { prisma } from '../';
// import config
import admin from '../config/firebaseAdmin'

const router = Router()

router.post('/', async(req, res) => {
  const { displayName } = req.body
  const token = req.headers.authorization as string
  const idToken = token.replace(/^Bearer (.*)/, "$1");
  const { uid } = await admin.auth().verifyIdToken(idToken)
  const currentUser = await prisma.user.findOne({where: {uid}})
  console.log('currentUser', currentUser);
  if(currentUser) {
    res.sendStatus(200)
  }else {
    await prisma.user.create({
      data: {
        uid,
        name: displayName
      }
    })
    res.sendStatus(200)
  }
})

export default router