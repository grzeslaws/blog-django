export class PostPayload {
    constructor(public title: string, public text: string, public author?: number, public categories?: number[]) {}
}
