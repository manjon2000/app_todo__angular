import * as uuid from 'uuid';

export class todoModel {

    public id: string;
    public name: string;
    public isCompleted: boolean;

    constructor(
        name: string
    ) {
        this.id = uuid.v4();
        this.name = name;
        this.isCompleted = false;
    }
} 