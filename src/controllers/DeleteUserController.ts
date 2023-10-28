import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";


class DeleteUserController {
    /**
     * teste
     * @param request 
     * @param response 
     * @returns 
     */
    async execute(request: Request, response: Response) {
        const { id } = request.params;

        const deleteUserService = new DeleteUserService();

        await deleteUserService.deleteUser(Number(id));

        return response.status(204).send();
    }
}

export { DeleteUserController };