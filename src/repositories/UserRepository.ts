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
    async findUserById(id: number): Promise<User | null> {
        const user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
    
        return user;
      }
    
      async getAllUsers(): Promise<User[]> {
        const users = await prisma.user.findMany();
    
        return users;
      }
    
      async updateUser({ id, name, email }: User): Promise<User> {
        const updatedUser = await prisma.user.update({
          where: {
            id,
          },
          data: {
            name,
            email,
          },
        });
    
        return updatedUser;
      }
    
      async deleteUser(id: number): Promise<void> {
        await prisma.user.delete({
          where: {
            id,
          },
        });
      }
}

export { UserRepository }