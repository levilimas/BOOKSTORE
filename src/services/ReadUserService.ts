import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

class ReadUserService {
    getAllUsers() {
        throw new Error("Method not implemented.");
    }
    async execute(): Promise<User[]> {
        const userRepository = new UserRepository();

        const users = await userRepository.getAllUsers();

        return users;
    }
}

export { ReadUserService };