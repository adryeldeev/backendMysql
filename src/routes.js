import { Router } from "express";
import ClientController from "./app/controllers/ClientController.js";



const router = Router()


router.get('/', ClientController.index)
router.get('/cliente', ClientController.store)
router.get('/ler/:id', ClientController.show)
router.get('/edit/:id', ClientController.update)
router.get('/delete/:id', ClientController.delete)


export default router 