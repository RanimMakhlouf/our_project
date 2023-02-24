"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorServerResponse = void 0;
const responseMessages_1 = require("./responseMessages");
const errorServerResponse = (res) => {
    return res.status(500).send({
        success: false,
        message: responseMessages_1.MSG.SERVER_ERROR,
    });
};
exports.errorServerResponse = errorServerResponse;
