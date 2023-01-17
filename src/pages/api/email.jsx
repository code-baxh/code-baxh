import {MongoClient} from 'mongodb';

/*
Q2ZEBJUVA3J4MiQq
*/

async function handler(req, res){
    if (req.method !== "POST") return;

   
    /*
    const body = JSON.parse(req.body);
    console.log(body);

    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_API_KEY)
    const db = client.db()
    const contactData = db.collection("contactData")
    const result = contactData.insertOne({email})

    res.status(201).json({
        post:result,
        message: "Thanks for subscribing to our news letter "
    })
    */

    

}


export default handler;
