
export class Quiz{
    constructor(
        public id: number,public Lesson:number,
        public title: string,public description: string,
        public questions:Question[],
        public passingScore: number,
        public score: number
    ){}
}

export class Question{
    constructor(public id: number,quiz:number,
        public question: string,
        public options: Answer[]) {
        
    }
}

export class Answer{
    constructor(
        public   id: number,
        public Answer: string,
        public isCorrect: boolean,
        public question:number
    ){}
}
    
