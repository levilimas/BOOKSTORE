import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async execute(request: Request, response: Response) {
        const { name, email } = request.body;

        const createUserService = new CreateUserService();

        const newUser = await createUserService.execute({
            name, email
        })

        return response.status(201).json(newUser)
    }
}

export { CreateUserController }