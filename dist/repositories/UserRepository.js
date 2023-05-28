"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const PrismaClient_1 = require("../database/PrismaClient");
class UserRepository {
    async createUser({ name, email }) {
        const newUser = await PrismaClient_1.prisma.user.create({
            data: {
                name,
                email
            },
            select: {
                name: true,
                email: true,
            }
        });
        return newUser;
    }
    async findUserByEmail({ email }) {
        const foundUser = await PrismaClient_1.prisma.user.findFirst({
            where: {
                email
            },
            select: {
                name: true,
                email: true,
            }
        });
        return foundUser;
    }
}
exports.UserRepository = UserRepository;
