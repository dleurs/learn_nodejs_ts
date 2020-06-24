import mongodb from 'mongodb';
import { getDb } from '../utils/database';

export class Todo
{
    _id: string | null;
    title: string;
    done: boolean;
    creationDate: Date | null;
    constructor({ id, title, done = false, creation = true }: TodoArgs)
    {
        this._id = id || null; // Only in fromJson
        if (title == (undefined || null)) { throw ("Title of todo should not be null") }
        this.title = title;
        this.done = done;
        if (creation) { this.creationDate = new Date(); }
        else { this.creationDate = null; }
    }

    static fromJson(json: any): Todo
    {
        let todoArgs: TodoArgs = {
            id: (new mongodb.ObjectId(json._id)).toString(),
            title: json.title,
            done: json.done,
            creation: false
        };
        return new Todo(todoArgs);
    }

    toJson(): any
    {
        let json: any = {};
        if (this._id != null)
        {
            json._id = new mongodb.ObjectId(this._id);
        }
        json.title = this.title;
        json.done = this.done;
        json.creationDate = this.creationDate;
        return json;
    }

    async save(): Promise<void>
    {
        const db: mongodb.Db = getDb();
        let dbOperation;
        if (this._id) {
            dbOperation = db.collection('todos').updateOne({ _id: new mongodb.ObjectId(this._id)}, {$set: this.toJson()});
        }
        else {
            dbOperation = db.collection('todos').insertOne(this.toJson());
        }
        await dbOperation;
    }

    static async get(todoId: string): Promise<Todo>
    {
        const db: mongodb.Db = getDb();
        const json: any = await db.collection('todos').findOne({ _id: new mongodb.ObjectId(todoId) })
        if (json == (undefined || null)) { throw ("Todo not found") };
        return Todo.fromJson(json);
    }

    static async delete(todoId: string): Promise<void>
    {
        const db: mongodb.Db = getDb();
        await db.collection('todos').deleteOne({ _id: new mongodb.ObjectId(todoId) });
    }

    static async getAll(): Promise<Array<Todo>>
    {
        const db: mongodb.Db = getDb();
        return (await db.collection('todos').find().toArray()).map(json => Todo.fromJson(json));
    }

    public toString(): string
    {
        let res: string = "Todo named `" + this.title;
        res += " with id = " + this._id || "unset";
        if (this.done)
        {
            res += "` is done";
        }
        else
        {
            res += "` is not done yet";
        }
        return res;
    }

}

export function showTodos(todos: Array<Todo>): string
{
    let str: string = "<table>"
    for (let todo of todos)
    {
        if (todo.done)
        {
            str += `<tr> <td><a style="color:#006400; font-weight: bold;" >` + todo.title + `</td></a>\t`;
            str += `<td><form action="/todo/checking/false/` + todo._id + `" method="POST"><button type="submit">Uncheck</button></form></td>`;
        } else
        {
            str += `<tr> <td><a>` + todo.title + `</td></a>\t`;
            str += `<td><form action="/todo/checking/true/` + todo._id + `" method="POST"><button type="submit">Check</button></form></td>`;
        }

        str += `<td><form action="/todo/delete/` + todo._id + `" method="POST"><button type="submit">X</button></form></td>`;
        str += "</tr>";
    }
    str += "</table>"
    return str;
}

export class TodoArgs
{
    id?: string | null;
    title!: string;
    done?: boolean;
    creation?: boolean;
}
