"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
class CreateUserService {
    /**
     * Serviço de criação de usuário
     * @param name Nome do usuário a ser criado
     * @param email Email do usuário a ser criado
     *
     * Será validado se o email já existe no sistema, caso já exista será retornado um erro
     *
     * @returns Retorna o usuário criado
     */
    async execute({ name, email }) {
        const userRepository = new UserRepository_1.UserRepository();
        const userAlreadyExists = await userRepository.findUserByEmail({ email });
        if (userAlreadyExists)
            throw new Error("User already exists");
        const newUser = await userRepository.createUser({ name, email });
        return newUser;
    }
}
exports.CreateUserService = CreateUserService;
