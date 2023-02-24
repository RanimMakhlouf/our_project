import { RequestHandler } from "express";

import { user } from "../models/user";

export const createUser: RequestHandler = async (req, res, next) => {
  var us = await user.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "user created successfully", data: us });
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deleteduser: user | null = await user.findByPk(id);
  await user.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "user deleted successfully", data: deleteduser });
};

export const getAllUser: RequestHandler = async (req, res, next) => {
  const alluser: user[] = await user.findAll();
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: alluser });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const us: user | null = await user.findByPk(id);
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: us});
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await user.update({ ...req.body }, { where: { id } });
  const updatedus: user | null = await user.findByPk(id);
  return res
    .status(200)
    .json({ message: "user updated successfully", data: updatedus });
};



