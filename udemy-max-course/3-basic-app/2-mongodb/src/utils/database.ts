import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const dbUrl: string | undefined = process.env.DBURL;

let _db: mongodb.Db;

export async function mongoConnect()
{
    if (dbUrl == undefined)
    {
        throw ("dbPassword should be set");
    }
    try
    {
        let client: mongodb.MongoClient = await MongoClient.connect(dbUrl);
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
