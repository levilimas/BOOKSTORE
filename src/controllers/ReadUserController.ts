import { Request, Response } from "express";
import { ReadUserService } from "../services/ReadUserService";

class ReadUserController {
    async execute(request: Request, response: Response) {
        const readUserService = new ReadUserService();

        const users = await readUserService.getAllUsers();

        return response.json(users);
    }
}

export { ReadUserController };