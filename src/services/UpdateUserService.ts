import { User } from "@prisma/client";
import { UserRepository } from "../repositories/UserRepository";

type DTOUpdateUserService = {
    id: number ;
    name: string;
    email: string;
}

class UpdateUserService {
    async updateUser(id: number, name: string, email: any) {
        const userRepository = new UserRepository();

        const user = await userRepository.findUserById(id);
        if (!user) {
            throw new Error("User not found");
        }

        const updatedUser = await userRepository.updateUser({ id, name, email });

        return updatedUser;
    }
}

export { UpdateUserService };
