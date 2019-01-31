import { DoucovanyPredmet } from './doucovanyPredmet';

export class Doucovatel {
    constructor (
        public meno: string,
        public priezvisko: string,
        public predmety?: DoucovanyPredmet[],
        public id?: number,
        public aktivny: boolean = true
    ){}

    getAktivnyString(): string {
        return this.aktivny ? "aktívny" : "neaktívny";
    }

}