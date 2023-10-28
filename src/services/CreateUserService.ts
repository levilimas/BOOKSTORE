import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

type DTOCreateUserService = {
    name: string;
    email: string;
}

class CreateUserService {
    deleteUser(id: number) {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): void {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number, name: string, email: string) {
        throw new Error("Method not implemented.");
    }
    /**
     * Serviço de criação de usuário
     * @param name Nome do usuário a ser criado
     * @param email Email do usuário a ser criado
     * 
     * Será validado se o email já existe no sistema, caso já exista será retornado um erro
     * 
     * @returns Retorna o usuário criado
     */
    async execute({ name, email }: DTOCreateUserService): Promise<Omit<User, "id">> {
        const userRepository = new UserRepository();

        const userAlreadyExists = await userRepository.findUserByEmail({ email });
        if (userAlreadyExists) 
            throw new Error("User already exists");
        
        const newUser = await userRepository.createUser({ name, email });

        return newUser;
    }
}

export { CreateUserService }