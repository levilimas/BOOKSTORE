"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../services/CreateUserService");
class CreateUserController {
    async execute(request, response) {
        const { name, email } = request.body;
        const createUserService = new CreateUserService_1.CreateUserService();
        const newUser = await createUserService.execute({
            name, email
        });
        return response.status(201).json(newUser);
    }
}
exports.CreateUserController = CreateUserController;
