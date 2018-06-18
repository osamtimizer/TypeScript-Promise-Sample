import IUser from '../Interfaces/IUser'

export default class SampleUser implements IUser{
    private _id: string
    private _name: string
    constructor(id: string, name: string) {
        if (!id || !name) {
            throw new Error("Invalid Arguments");
        }

        this._id = id;
        this._name = name;
    }

    getId(): string {
        return this._id;
    }

    getName(): string {
        return this._name;
    }
}