import mongodb from 'mongodb';

const dbUrl: string = process.env.DBURL || "notSet";

let _db: mongodb.Db;

export async function mongoConnect()
{
    if (dbUrl == undefined)
    {
        throw ("dbPassword should be set");
    }
    let success: boolean = false
    while (!success)
    {
        try
        {
            let client: mongodb.MongoClient = await mongodb.MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log(`Connected to mongoDB`);
            success = true
            _db = client.db();
        }
        catch (err)
        {
            console.log('Error connecting to MongoDB, retrying in 1 second')
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
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
