export class Student {
    constructor(
        public meno: string,
        public priezvisko: string,
        public stupenStudia: string,
        public telefon: string,
        public email: string,
        public id?: number,
        public aktivny: boolean = true
    ){}

    getAktivnyString(): string {
        return this.aktivny ? "aktívny" : "neaktívny";
    }

    clone():Student {
        return new Student(this.meno, this.priezvisko, this.stupenStudia, this.telefon, this.email, this.id, this.aktivny);
    }

}