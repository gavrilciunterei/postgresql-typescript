import { Router } from 'express';
const router = Router();

import {
  createUser,
  deleteUser,
  getUsers,
  getUsersById,
  updateUser,
} from '../controllers/index.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
