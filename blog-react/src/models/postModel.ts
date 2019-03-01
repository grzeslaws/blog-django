import { ArrayField, Field } from "sparkson";

export class Post {
    constructor(
        @Field("id") public id: string,
        @Field("title") public title: string,
        @Field("text") public text: string,
        @Field("created_at") public createdAt: string,
        @Field("author", true) public author?: number,
        @ArrayField("categories", Number) public categories?: number[],
    ) {}
}
