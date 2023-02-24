"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.getAllUser = exports.deleteUser = exports.createUser = void 0;
const user_1 = require("../models/user");
const createUser = async (req, res, next) => {
    var us = await user_1.user.create({ ...req.body });
    return res
        .status(200)
        .json({ message: "user created successfully", data: us });
};
exports.createUser = createUser;
const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const deleteduser = await user_1.user.findByPk(id);
    await user_1.user.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "user deleted successfully", data: deleteduser });
};
exports.deleteUser = deleteUser;
const getAllUser = async (req, res, next) => {
    const alluser = await user_1.user.findAll();
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: alluser });
};
exports.getAllUser = getAllUser;
const getUserById = async (req, res, next) => {
    const { id } = req.params;
    const us = await user_1.user.findByPk(id);
    return res
        .status(200)
        .json({ message: "User fetched successfully", data: us });
};
exports.getUserById = getUserById;
const updateUser = async (req, res, next) => {
    const { id } = req.params;
    await user_1.user.update({ ...req.body }, { where: { id } });
    const updatedus = await user_1.user.findByPk(id);
    return res
        .status(200)
        .json({ message: "user updated successfully", data: updatedus });
};
exports.updateUser = updateUser;
