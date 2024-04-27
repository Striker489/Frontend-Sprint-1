export class Lesson {
    constructor(
      public id: number,
      public cour: number,
      public title: string,
      public description: string,
      public chapters: number[],
      public quiz: number
    ) {}
  }
  