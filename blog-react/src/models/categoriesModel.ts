import { ArrayField, Field } from "sparkson";
import { Category } from './categoryModel';

export class Categories {
    constructor(
        @ArrayField("results", Category) public results: Category[],
        @Field("count", true) public count?: number,
        @Field("next", true) public next?: string,
        @Field("previous", true) public previous?: string,
    ) {}
}
