import { Router } from "express";
import urlController from "../controllers/urlController";

const router = Router();

router.post('/shorten-url', urlController.createUrl)
router.get('/health', (req, res) => {
    res.status(200).send('OK')
})
router.get('/*', urlController.getFullUrl)


export default router;