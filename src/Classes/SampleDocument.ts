import IUser from '../Interfaces/IUser'
import IDocument from '../Interfaces/IDocument';
import SampleUser from './sampleUser';


export default class SampleUserDocument implements IDocument<IUser> {
    private _data: Array<IUser>
    private _delay: number;

    //In an actual environment, this data has to be given by some ODM class.
    constructor(delay: number) {
        this._delay = delay;
        this._data = new Array<IUser>();
        this._data.push(new SampleUser('aaa', 'test1'));
        this._data.push(new SampleUser('bbb', 'test2'));
        this._data.push(new SampleUser('ccc', 'test3'));
    }

    findById(query: string): Promise<IUser> {
        return this._readFromDBbyId(query);
    }

    findByName(query: string): Promise<IUser> {
        return this._readFromDBbyName(query);
    }

    write(user: IUser): Promise<IUser> {
        return this._writeToDB(user);
    }

    private _writeToDB(user: IUser): Promise<IUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isUserFound = this._data.some((x: IUser) => {
                    return (x.getId() === user.getId());
                });
                if (isUserFound) {
                    reject(user);
                } else {
                    this._data.push(user);
                    resolve(user);
                }
            }, this._delay);
        });
    }

    private _readFromDBbyId(query: string): Promise<IUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const map: IUser | undefined = this._data.find((x: IUser) => { return (x.getId() === query) });
                if (map === undefined) {
                    reject('no user matched');
                } else {
                    resolve(map);
                }
            }, this._delay);
        });
    }

    private _readFromDBbyName(query: string): Promise<IUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const map: IUser | undefined = this._data.find((x: IUser) => { return (x.getName() === query) });
                if (map === undefined) {
                    reject('no user matched');
                } else {
                    resolve(map);
                }
            }, this._delay);
        });
    }
}
