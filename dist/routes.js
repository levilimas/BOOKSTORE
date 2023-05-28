"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/CreateUserController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.json({ message: 'hello world with Typescript' });
});
const createUserController = new CreateUserController_1.CreateUserController();
router.post("/user/create", createUserController.execute);
