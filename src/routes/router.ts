import { Router } from "express";
import urlController from "../controllers/urlController";

const router = Router();

router.post('/shorten-url', urlController.createUrl)
router.get('/*', urlController.getFullUrl)

export default router;