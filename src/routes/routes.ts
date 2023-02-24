import { Router } from "express";
import { Paths } from "../common/paths";
import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
  getUserById
  } from "../controllers/models.controller";


  const router = Router();

router.post(Paths.GET_EXAMPLE_1, createUser);

router.get(Paths.GET_EXAMPLE_1, getAllUser);

router.get(Paths.GET_EXAMPLE_2, getUserById);

router.put(Paths.GET_EXAMPLE_2, updateUser);

router.delete(Paths.GET_EXAMPLE_2, deleteUser);

export default router;
