import { UserRepository } from "../repositories/UserRepository";

class DeleteUserService {
  
    async deleteUser(id: number): Promise<void> {
        const userRepository = new UserRepository();

        const user = await userRepository.findUserById(id);
        if (!user) {
            throw new Error("User not found");
        }

        await userRepository.deleteUser(id);
    }
}

export { DeleteUserService };
