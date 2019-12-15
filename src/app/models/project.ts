export class Project{
    constructor(
         public _id: string,
         public name: string,
         public description,
         public category: string,
         public year: number,
         public lang: string,
         public image: string
    ){}
}