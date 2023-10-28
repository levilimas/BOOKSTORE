import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
    async execute(request: Request, response: Response) {
        const { id, name, email } = request.body;

        const updateUserService = new UpdateUserService();

        const updateUser = await updateUserService.updateUser(id, name, email);

        return response.json(updateUser);
    }
}

export { UpdateUserController };