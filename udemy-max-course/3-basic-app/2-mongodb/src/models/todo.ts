import mongodb from 'mongodb';
import { getDb } from '../utils/database';

export class Todo
{
    title: string;
    done: boolean;
    constructor({ title, done = false }: TodoArgs)
    {
        this.title = title;
        this.done = done;
    }

    async save() {
        const db: mongodb.Db = getDb();
        await db.collection('todos').insertOne(this);
    }

}

export class TodoArgs {
    title!: string;
    done?: boolean;
}
