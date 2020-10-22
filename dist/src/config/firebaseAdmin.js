"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var dotenv_1 = require("dotenv");
dotenv_1.config();
var admin = firebase_admin_1["default"].initializeApp({
    credential: firebase_admin_1["default"].credential.cert({
        projectId: process.env.NODE_ENV === 'development' ? process.env.PROJECT_ID : process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.NODE_ENV === 'development' ? process.env.CLIENT_EMAIL : process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.NODE_ENV === 'development' ? process.env.PRIVATE_KEY.replace(/\\n/g, '\n') : process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
    databaseURL: process.env.NODE_ENV === 'development' ? "https://" + process.env.PROJECT_ID + ".firebaseio.com" : "https://" + process.env.FIREBASE_PROJECT_ID + ".firebaseio.com"
});
exports["default"] = admin;
//# sourceMappingURL=firebaseAdmin.js.map