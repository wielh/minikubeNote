import express from 'express';
import {Request, Response, json} from 'express';
import { Client } from '@elastic/elasticsearch';

var elasticClient: Client = new Client({node: `http://elastic-example-service:9200`, maxRetries:3});
var app = express();

app.get('/', json(), async (req: Request, res:Response) => {
    const object = {index: "elastic_demo_index", body: {
        message: "Hello elastic",
        data: Math.floor(Math.random() * (65536)),
        level : "info", 
        APIversion : "v3",
        datetime: new Date()
    }}

    try {
        await elasticClient.index(object);
    } catch (error) {
        res.status(200).json({error: error})
    }
    
    res.status(200).json(object)
    return
})

app.listen(7777, function () {
    console.log(`Example API listening on port 7777 !`)
});
 

 