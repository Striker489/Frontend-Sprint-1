
export class Quiz{
    constructor(
        public id: number,public lesson:number,
        public title: string,public description: string,
        public questions:Question[],
        public passingScore: number,
        public score: number
    ){}
}

export class Question{
    constructor(public id: number,public quiz:number,
        public question: string,
        public options: Answer[]) {
        
    }
}

export class Answer{
    constructor(
        public   id: number,
        public answer: string,
        public isCorrect: boolean,
        public question:number
    ){}
}
    
