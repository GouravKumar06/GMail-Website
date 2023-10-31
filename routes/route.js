import express from "express";
import { saveSentEmails,getEmails,moveEmailsToBin,toggleStarredEmails,deleteEmails } from "../controller/email-controller.js";

const router = express.Router();


router.post('/save',saveSentEmails);
router.get('/emails/:type',getEmails);
router.post('/save-draft',saveSentEmails);
router.post('/bin',moveEmailsToBin);
router.post('/starred', toggleStarredEmails);
router.delete('/delete', deleteEmails);




export default router;