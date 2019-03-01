import { Field } from "sparkson";

export class Account {
    constructor(@Field("username") public username: string, @Field("email") public email: string) {}
}
