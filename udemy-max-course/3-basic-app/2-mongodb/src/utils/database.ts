import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const password: string = process.env.PASSWORD || "not set";
const dbname: string = process.env.DBNAME || "todos";

let _db: mongodb.Db;

export async function mongoConnect()
{
    try
    {
        let client: mongodb.MongoClient = await MongoClient.connect(`mongodb+srv://dimitri:${password}@testcluster-vbfgl.gcp.mongodb.net/${dbname}?retryWrites=true&w=majority`);
        console.log(`Connected to mongoDB`);
        _db = client.db();
    }
    catch (err)
    {
        console.log(`Error while trying to connect to mongoDB`);
        console.log(err);
    }
}

export function getDb(): mongodb.Db
{
    if (_db)
    {
        return _db;
    }
    throw 'No database found';
}