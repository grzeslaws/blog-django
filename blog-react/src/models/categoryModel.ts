import { Field } from "sparkson";

export class Category {
    constructor(@Field("name") public name: string) {} 
}
