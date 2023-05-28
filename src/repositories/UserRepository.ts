import { User } from "@prisma/client";
import { prisma } from "../database/PrismaClient"

type TCreateUser = {
    name: string;
    email: string;
}

type TFindUserByEmail = {
    email: string;
}

class UserRepository {
    async createUser({ name, email }: TCreateUser): Promise<Omit<User, "id">> {
        const newUser = await prisma.user.create({
            data: {
                name,
                email
            },
            select: {
                name: true,
                email: true,
            }
        })

        return newUser;	
    }
    async findUserByEmail({ email }: TFindUserByEmail): Promise<Omit<User, "id">> {
        const foundUser = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                name: true,
                email: true,
            }
        })

        return foundUser;
    }
}

export { UserRepository }