import { Router } from "express";
import { deleteUser, getAllUsers, getByUser, saveUser, updateUser } from "../controllers/user";

const router = Router();


router.get('/', getAllUsers)
router.get('/:id', getByUser)
router.post('/', saveUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router