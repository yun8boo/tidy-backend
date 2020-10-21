import Admin from "firebase-admin";
import { config } from 'dotenv';
config()

const admin = Admin.initializeApp({
  credential: Admin.credential.cert({
    projectId: process.env.NODE_ENV === 'development' ? process.env.PROJECT_ID : process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.NODE_ENV === 'development' ? process.env.CLIENT_EMAIL : process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.NODE_ENV === 'development' ? process.env.PRIVATE_KEY!.replace(/\\n/g, '\n') : process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n')
  }),
  databaseURL: process.env.NODE_ENV === 'development' ? `https://${process.env.PROJECT_ID}.firebaseio.com` : `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

export default admin