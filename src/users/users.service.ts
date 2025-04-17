import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    username: string;
    password: string;
}

const users:User [] = [
    {
        userId:1,
        username: 'Yarin',
        password: 's3cret',
    }
]

@Injectable()
export class UsersService {

    findUserByName(username : string){ // Should i do an async function or no?
        return users.find(user => user.username === username);
    }
}
