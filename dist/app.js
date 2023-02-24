"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const sequelize_1 = require("./src/config/sequelize");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const body_parser_2 = require("body-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
sequelize_1.sequelize.sync()
    .then(() => {
    console.log("Database successfully connected");
})
    .catch((err) => {
    console.log("Error", err);
});
//routes imports
app.use((0, body_parser_2.json)());
app.use("/users", routes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// Application's port
const port = process.env.PORT || 2002;
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use((0, cors_1.default)());
app.listen(port, () => console.log("Server started at port: ", port));
