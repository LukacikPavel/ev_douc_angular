import { Predmet } from './predmet';

export class Doucovatel {
    constructor (
        public meno: string,
        public priezvisko: string,
        public predmety?: Predmet[],
        public id?: number,
        public aktivny: boolean = true
    ){}

    getAktivnyString(): string {
        return this.aktivny ? "aktívny" : "neaktívny";
    }

}