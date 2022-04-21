//place to store our users, eventually get our users

export interface User{
    firstname: string;
    lastname: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    token?: string;
}