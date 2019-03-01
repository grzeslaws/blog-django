import { ArrayField, Field } from "sparkson";
import { Post } from './postModel';

export class Posts {
    constructor(
        @ArrayField("results", Post) public results: Post[],
        @Field("count", true) public count?: number,
        @Field("next", true) public next?: string,
        @Field("previous", true) public previous?: string
    ) {}
}
